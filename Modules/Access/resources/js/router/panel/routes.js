import AppLayout from "dashboard/js/components/panel/layouts/AppLayout.vue";

const routes = [
    {
        label: "Access",
        icon: 'pi pi-fw pi-unlock',
        path: "/roles",
        name: "roles",
        component: AppLayout,
        children: [
            {
                label: "Role",
                icon: 'pi pi-fw pi-ban',
                path: "/roles",
                name: "roles",
                meta: { requiresAuth: true },
                component: () => import("access/js/components/panel/role/Index.vue"),
            },
            {
                label: "Create",
                icon: 'pi pi-fw pi-plus',
                path: "/roles/create",
                name: "roles.create",
                meta: { requiresAuth: true },
                nav: false,
                component: () => import("access/js/components/panel/role/Create.vue"),
            },
        ],
    },

];

export default routes;
