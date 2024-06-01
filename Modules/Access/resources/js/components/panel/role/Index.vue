<script setup>
import { ref, onMounted, watch } from "vue";
import debounce from 'lodash.debounce';

////////////////////////////////////////////////////////// Variables /////////////////////////////////////////////////////////////////////

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});
const items = ref([
    { label: 'Access' },
    { label: 'Index', route: '/roles' }
]);

const roles = ref([]);
const loading = ref(false);
const search = ref(null);
const totalRecords = ref(0);
const rows = ref(0);
const page = ref(0);

////////////////////////////////////////////////////////// Variables /////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////// Functions /////////////////////////////////////////////////////////////////////

const fetchRoles = async () => {

    loading.value = true;

    try {

        const response = await axios.get(`/roles`, {
            params: {
                page: page.value,
                search: search.value,
            }
        });

        roles.value = response.data.data;
        totalRecords.value = response.data.meta.total;
        rows.value = response.data.meta.per_page;

    } catch (error) {

        toast.add({ severity: 'error', summary: 'Rejected', detail: error.response.data.message, life: 2000 });

    }

    loading.value = false;

}

const changePage = (event) => {
    page.value = event.page + 1;
    fetchRoles();
}

const deleteRole = (roleId) => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Attention',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        acceptLabel: 'Delete',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: async () => {

            loading.value = true;

            try {

                const response = await axios.delete(`/roles/${roleId}/`);

                roles.value = roles.value.filter(role => role.id != roleId);
                totalRecords.value--;
                rows.value--;
                if (rows.value <= 3) {
                    fetchRoles();
                }
                toast.add({ severity: 'success', summary: 'Success', detail: response.data.message, life: 2000 });

            } catch (error) {

                toast.add({ severity: 'error', summary: 'Rejected', detail: error.response.data.message, life: 2000 });

            }

            loading.value = false;


        },
    });
}

const loggger = (string, divider = 1) => {
    divider = divider.toString().repeat(85);
    console.log(divider);
    console.log(string);
    console.log(divider);
}


////////////////////////////////////////////////////////// Functions /////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////// Others /////////////////////////////////////////////////////////////////////

onMounted(() => {
    fetchRoles();
});

watch(search, debounce(() => {
    fetchRoles();
}, 800))

////////////////////////////////////////////////////////// Others /////////////////////////////////////////////////////////////////////


</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-12 xl:col-12">
            <Card>
                <template #title>
                    <div class="flex justify-content-between">
                        <div>
                            <Breadcrumb :home="home" :model="items">
                                <template #item="{ item, props }">
                                    <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                                        <a :href="href" v-bind="props.action" @click="navigate">
                                            <span :class="[item.icon, 'text-color']" />
                                            <span class="text-primary font-semibold">{{ item.label }}</span>
                                        </a>
                                    </router-link>
                                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                                        <span class="text-color">{{ item.label }}</span>
                                    </a>
                                </template>
                            </Breadcrumb>
                        </div>
                    </div>
                </template>

                <template #content>
                    <DataTable :value="roles" dataKey="id" :rowHover="true" :loading="loading" showGridlines>
                        <template #header>
                            <div class="flex justify-content-between flex-column sm:flex-row">
                                <IconField iconPosition="right">
                                    <InputIcon class="pi pi-search" />
                                    <InputText v-model="search" placeholder="Search" style="width: 100%" />
                                </IconField>

                                <router-link to="/roles/create" rel="noopener">
                                    <Button severity="success" label="Add" />
                                </router-link>
                              
                            </div>
                        </template>
                        <template #empty> No Data </template>
                        <template #loading> Loading Please wait ... </template>
                        <Column field="id" header="#" style="min-width: 2rem"></Column>
                        <Column field="name" header="Name" style="min-width: 12rem"></Column>
                        <Column field="permissions_count" header="Permissions" style="min-width: 2rem">
                            <template #body="slotProps">
                                <Badge :value="slotProps.data.permissions_count" severity="primary"
                                    v-if="slotProps.data.permissions_count"></Badge>
                                <Badge :value="slotProps.data.permissions_count" severity="danger" v-else></Badge>
                            </template>


                        </Column>
                        <Column field="created_at" header="Date" style="min-width: 12rem"></Column>

                        <Column header="Actions" style="min-width: 2rem">
                            <template #body="slotProps">
                                <div class="flex space-x-3">
                                    <Button icon="pi pi-pencil" severity="info" aria-label="Edit" />
                                    <Button icon="pi pi-trash" severity="danger" aria-label="Delete"
                                        @click="deleteRole(slotProps.data.id)" />
                                </div>
                            </template>
                        </Column>

                        <template #footer>
                            <Paginator :rows="rows" :totalRecords="totalRecords" @page="changePage"></Paginator>
                        </template>

                    </DataTable>
                </template>

            </Card>
        </div>
    </div>
</template>
