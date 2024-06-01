<script setup>
import { ref, onMounted } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import routes from '@/router/panel/routes.js';


const mapRoutes = (menuData) => {
    return menuData.map(item => {
        item.nav = item.hasOwnProperty('nav') ? item.nav : true;

        if (!item.nav) {
            return {};
        }
        let newItem = {
            label: item.label,
            icon: item.icon,
            to: item.path,
            name: item.name,
            meta: item.meta,
        };

        if (item.children && item.children.length > 0) {
            newItem.items = mapRoutes(item.children);
        }

        return newItem;
    });
}

const mappedRoutes = ref([]);

////////////////////////////////////////////////////////// Others /////////////////////////////////////////////////////////////////////

onMounted(() => {
    mappedRoutes.value = mapRoutes(routes)//Todo:implement user access
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
