import { createRouter, createWebHistory } from "vue-router";
import authMiddleware from "../../../../Modules/Auth/resources/js/middlewares/panel/authMiddleware.js";
import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach(authMiddleware);

export default router;
