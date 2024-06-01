<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});
const items = ref([
    { label: 'Users' },
    { label: 'Index', route: '/users' }
]);
</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-12 xl:col-12">
            <div class="card">
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
                    <!-- <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div> -->
                </div>

            </div>
        </div>
    </div>
</template>
