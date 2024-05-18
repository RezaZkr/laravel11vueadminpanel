import AppLayout from "dashboard/js/components/panel/layouts/AppLayout.vue";

const routes = [
    {
        label: "Home",
        icon: 'pi pi-fw pi-home',
        path: "/",
        name: "home",
        component: AppLayout,
        children: [
            {
                label: "Dashboard",
                icon: 'pi pi-fw pi-home',
                path: "/",
                name: "dashboard",
                meta: {requiresAuth: true},
                component: () => import("dashboard/js/components/panel/views/Dashboard.vue"),
            },
        ],
    },
];

export default routes;
