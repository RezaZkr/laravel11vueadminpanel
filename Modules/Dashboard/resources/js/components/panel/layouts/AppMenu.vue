<script setup>
import {ref, onMounted} from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import routes from '@/router/panel/routes.js';

const mapRoutes = () => {
    const result = [];
    const routeMap = {};

    routes.forEach(route => {

        if (!routeMap[route.name]) {
            routeMap[route.name] = {
                label: route.label,
                items: []
            };

        }

        if (route.children) {
            route.children.forEach(children => {
                routeMap[route.name].items.push({
                    label: children.label,
                    icon: children.icon,
                    to: children.path
                });
            });

        } else {
            routeMap[route.name].items.push({
                label: route.label,
                icon: route.icon,
                to: route.path
            });
        }

        result.push(routeMap[route.name]);

    });

    return result.filter(group => group.label);
}


const mappedRoutes = ref([]);

// console.log('111111111111111111111111111111111111111111');
// console.log(mappedRoutes.value);
// console.log('111111111111111111111111111111111111111111');

////////////////////////////////////////////////////////// Others /////////////////////////////////////////////////////////////////////

onMounted(() => {
    mappedRoutes.value = mapRoutes()
});

////////////////////////////////////////////////////////// Others ////////////////////////////////////////////////////////////////////

</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in mappedRoutes" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
