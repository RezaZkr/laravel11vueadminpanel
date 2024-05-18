const routes = [
    {
        path: "/login",
        name: "login",
        meta: {requiresAuth: false},
        component: () => import("auth/js/components/panel/Login.vue"),
    },
];

export default routes;
