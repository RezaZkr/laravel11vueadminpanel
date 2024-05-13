const routes = [
    {
        path: "/users",
        name: "users",
        meta: {requiresAuth: true},
        component: () => import("../../components/panel/Index.vue"),
    },
];

export default routes;
