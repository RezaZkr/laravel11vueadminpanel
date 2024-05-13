import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";

export const useAuthStore = defineStore(
    "auth",
    () => {

        //////////////////////////////////////////////////////////////////Variables//////////////////////////////////////////////////////////

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

        //////////////////////////////////////////////////////////////////Variables//////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////Functions//////////////////////////////////////////////////////////

        const setUser = (loggedInUser) => {
            user.id = loggedInUser.id;
            user.first_name = loggedInUser.first_name;
            user.last_name = loggedInUser.last_name;
            user.email = loggedInUser.email;
            user.created_at = loggedInUser.created_at;

            accessToken.token = loggedInUser.access_token;
            accessToken.expire = secondsToTimeStamp(loggedInUser.expire);

            // permissions.value=loggedInUser.permissions
        };

        const secondsToTimeStamp = (seconds) => {
            const tokenDate = new Date();
            tokenDate.setUTCSeconds(tokenDate.getUTCSeconds() + seconds);
            return tokenDate.getTime();
        }

        const clearUserSession = () => {
            user.id = null;
            user.first_name = null;
            user.last_name = null;
            user.email = null;
            user.created_at = null;

            accessToken.token = null;
            accessToken.expire = null;

            permissions.value = [];
        }

        //////////////////////////////////////////////////////////////////Functions//////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////Others////////////////////////////////////////////////////////////

        const isTokenExpired = computed(() => {

            if (!user.id || !accessToken.token || !accessToken.expire) {

                clearUserSession();
                return true;

            }

            const currentTimestamp = Date.now();

            const flag = currentTimestamp > accessToken.expire;
            if (flag) {
                clearUserSession();
            }
            return flag;

        });

        //////////////////////////////////////////////////////////////////Others////////////////////////////////////////////////////////////


        return { user, accessToken, permissions, setUser, isTokenExpired };
    },
    {
        persist: [
            {
                key: "panel_auth",
                paths: ["accessToken","user","permissions"],
                storage: localStorage
            },
            // {
            //     key: "user",
            //     paths: ["user"],
            //     storage: localStorage
            // },
            // {
            //     key: "permissions",
            //     paths: ["permissions"],
            //     storage: localStorage
            // },
        ],
    }
);