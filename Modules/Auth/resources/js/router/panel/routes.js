const routes = [
    {
        path: "/login",
        name: "login",
        meta: {requiresAuth: false},
        component: () => import("../../components/panel/Login.vue"),
    },
];

export default routes;
