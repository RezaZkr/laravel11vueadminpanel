import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/layouts/AppLayout.vue";
import authMiddleware from "../../../Modules/Auth/resources/js/panel/middlewares/authMiddleware.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: "login",
            meta: { requiresAuth: false },
            component: () =>
                import(
                    "../../../Modules/Auth/resources/js/panel/components/Login.vue"
                ),
        },
        {
            path: "/",
            component: AppLayout,
            children: [
                {
                    path: "/",
                    name: "dashboard",
                    meta: { requiresAuth: true },
                    component: () =>
                        import("../components/views/Dashboard.vue"),
                },
                {
                    path: "/users",
                    name: "users",
                    meta: { requiresAuth: true },
                    component: () =>
                        import(
                            "../../../Modules/User/resources/js/components/panel/Index.vue"
                        ),
                },
            ],
        },
    ],
});

router.beforeEach(authMiddleware);

export default router;
