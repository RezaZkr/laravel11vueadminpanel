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
    { label: 'Create', route: '/roles/create' }
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

const loggger = (string, divider = 1) => {
    divider = divider.toString().repeat(85);
    console.log(divider);
    console.log(string);
    console.log(divider);
}


////////////////////////////////////////////////////////// Functions /////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////// Others /////////////////////////////////////////////////////////////////////

// onMounted(() => {
//     fetchRoles();
// });

// watch(search, debounce(() => {
//     fetchRoles();
// }, 800))

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
                    
                </template>

            </Card>
        </div>
    </div>
</template>
