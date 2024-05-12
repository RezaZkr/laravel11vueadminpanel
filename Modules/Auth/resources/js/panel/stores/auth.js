import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const user = reactive({
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        created_at: null,
    });

    const accessToken = reactive({
        token: null,
        expire: null,
    });

    const permissions = ref([]);

    const expireTimestamp = new Date(accessToken.expire).getTime();

    const currentTimestamp = new Date().getTime();

    const isTokenExpired = computed(() => {
        if (!user.id || !accessToken.token) {
            return false;
        }
        return expireTimestamp < currentTimestamp;
    });

    const setUser = (loggedInUser) => {
        user.id = loggedInUser.id;
        user.first_name = loggedInUser.first_name;
        user.last_name = loggedInUser.last_name;
        user.email = loggedInUser.email;
        user.created_at = loggedInUser.created_at;

        accessToken.token = loggedInUser.access_token;
        accessToken.expire = loggedInUser.expire;

        // permissions.value=loggedInUser.permissions
    };

    return { user, accessToken, permissions, setUser, isTokenExpired };
});


//Todo continue from https://github.com/prazdevs/pinia-plugin-persistedstate 