import AppLayout from "dashboard/js/components/panel/layouts/AppLayout.vue";

const routes = [
    {
        label: "Users",
        icon: 'pi pi-fw pi-user',
        path: "/users",
        name: "users",
        component: AppLayout,
        children: [
            {
                label: "Users",
                icon: 'pi pi-fw pi-user',
                path: "/users",
                name: "users",
                meta: { requiresAuth: true },
                component: () => import("user/js/components/panel/user/Index.vue"),
            },
        ],
    },

];

export default routes;
