import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/layouts/AppLayout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () =>
                import(
                    "../../../Modules/Auth/resources/js/components/panel/Login.vue"
                ),
        },
        {
            path: "/",
            component: AppLayout,
            children: [
                {
                    path: "/",
                    name: "dashboard",
                    component: () =>
                        import("../components/views/Dashboard.vue"),
                },
                {
                    path: "/users",
                    name: "users",
                    component: () =>
                        import(
                            "../../../Modules/User/resources/js/components/panel/Index.vue"
                        ),
                },
            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    // if (to.name !== "login" && !isAuthenticated) {
    //     next({ name: "login" });
    // } else {
    next();
    // }
});

export default router;
