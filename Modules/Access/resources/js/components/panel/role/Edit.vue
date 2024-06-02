<script setup>
import { ref, onMounted, inject, reactive } from "vue";
import { useRouter } from 'vue-router';
import debounce from 'lodash.debounce';

////////////////////////////////////////////////////////// Variables /////////////////////////////////////////////////////////////////////

const router = useRouter();

const props = defineProps({
    id: String,
})

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});
const items = ref([
    { label: 'Access' },
    { label: 'Edit', route: '/roles/:id/edit' }
]);

const role = reactive({
    id: props.id,
    name: null,
    permissions: [],
});
const permissions = ref([]);
const loading = inject('loading')
const selectedPermissions = ref([]);
const selectedGroups = ref([]);

////////////////////////////////////////////////////////// Variables /////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////// Functions /////////////////////////////////////////////////////////////////////

const fetchRole = async () => {

    loading.value = true;

    try {

        const response = await axios.get(`/roles/${props.id}`);

        role.name = response.data.data.name;
        role.permissions = response.data.data.permissions;

    } catch (error) {
        toast.add({ severity: 'error', summary: 'Rejected', detail: error.response.data.message, life: 2000 });
    }

    loading.value = false;

}

const fetchPermissions = async () => {

    loading.value = true;

    try {

        const response = await axios.get(`/permissions`);

        permissions.value = response.data;

        fillPermissions();

    } catch (error) {

        toast.add({ severity: 'error', summary: 'Rejected', detail: error.response.data.message, life: 2000 });

    }

    loading.value = false;

}

const editRole = async () => {

    loading.value = true;

    try {

        const response = await axios.put(`/roles/${props.id}`, {
            name: role.name,
            permissions: selectedPermissions.value,
        });

        clearForm();
        toast.add({ severity: 'success', summary: 'Accept', detail: response.data.message, life: 2000 });

        debouncedNavigate();

    } catch (error) {
        toast.add({ severity: 'error', summary: 'Rejected', detail: error.response.data.message, life: 2000 });
    }

    loading.value = false;
}

const debouncedNavigate = debounce(() => {
    return router.push({ path: '/roles' });
}, 800);

const fillPermissions = () => {
    role.permissions?.forEach(permission => {
        selectedPermissions.value.push(permission.id);
    });
}

const clearForm = () => {
    role.name = null;
    selectedPermissions.value = [];
    selectedGroups.value = [];
}

const selectGroup = (event) => {

    const groupName = event.target.value;
    const isSelected = Object.values(selectedGroups.value).includes(event.target.value);

    permissions.value[groupName].forEach(item => {
        if (isSelected) {
            if (!selectedPermissions.value.some(per => per === item.id)) {
                selectedPermissions.value.push(item.id);
            }
        } else {
            selectedPermissions.value = selectedPermissions.value.filter(per => per !== item.id);
        }
    });

}

const selectPermission = (group) => {

    const groupPermissions = permissions.value[group];
    const selected = selectedPermissions.value;
    const isSelected = groupPermissions.every(item => selected.includes(item.id));

    if (isSelected) {
        if (!selectedGroups.value.includes(group)) {
            selectedGroups.value.push(group);
        }
    } else {
        selectedGroups.value = selectedGroups.value.filter(grp => grp !== group);
    }
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
    fetchRole();
    fetchPermissions();
});

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

                    <div class="w-full grid grid-cols-1 mb-3">
                        <div class="w-full flex items-center border-b border-indigo-500 py-2">
                            <InputText placeholder="Name" aria-label="Name" class="w-80" v-model="role.name">
                            </InputText>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 mt-3 gap-3">

                        <template v-for="(permission, group) in permissions" :key="group">
                            <Card class="border border-teal-500">

                                <template #subtitle>
                                    <div class="flex align-items-center gap-x-2">
                                        <Checkbox :value="group" :name="group + '1'" v-model="selectedGroups"
                                            @change="selectGroup" />
                                        <label>All</label>
                                    </div>
                                    <Divider type="dotted">
                                        <b> {{ group }}</b>
                                    </Divider>

                                </template>

                                <template #content>
                                    <div v-for="perm in permission" :key="perm.id"
                                        class="flex align-items-center gap-x-2">
                                        <Checkbox v-model="selectedPermissions" :name="group" :value="perm.id"
                                            @change="selectPermission(group)" />
                                        <label>{{ perm.name }}</label>
                                    </div>
                                </template>
                            </Card>

                        </template>

                    </div>
                    <div class="flex justify-end">
                        <Button class="mt-3" label="Update" @click="editRole()" :loading="loading"></Button>
                    </div>
                </template>

            </Card>
        </div>
    </div>
</template>
