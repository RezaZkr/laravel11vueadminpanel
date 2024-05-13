import AppLayout from "../../components/panel/layouts/AppLayout.vue";

const routes = [
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "/",
                name: "dashboard",
                meta: {requiresAuth: true},
                component: () => import("../../components/panel/views/Dashboard.vue"),
            },
        ],
    },
];

export default routes;
