import { useAuthStore } from "../../stores/panel/authStore.js";

export default function authMiddleware(to, from, next) {
    const auth = useAuthStore();

    if (to.meta.requiresAuth && auth.isTokenExpired) {
        next("/login");
    } else if (to.name == "login" && !auth.isTokenExpired) {
        next({ path: from.path });
    } else {
        next();
    }
}
