import { createRouter, createWebHistory } from "vue-router";
import authMiddleware from "auth/js/middlewares/panel/authMiddleware.js";
import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach(authMiddleware);

export default router;//todo implement create role
