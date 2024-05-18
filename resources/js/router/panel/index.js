import {createRouter, createWebHistory} from "vue-router";
import authMiddleware from "auth/js/middlewares/panel/authMiddleware.js";
import routes from "./routes.js";

// const newRoutes = [];
// routes.forEach(route => {
//     if (!route.parent) {
//         newRoutes.push(route);
//     } else {
//         const parentIndex = newRoutes.findIndex(parent => parent.name === route.parent);
//         if (parentIndex !== -1) {
//             newRoutes[parentIndex].children.push(route);
//         }
//     }
// });

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach(authMiddleware);

export default router;
