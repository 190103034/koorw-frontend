import { useAuthStore } from "~~/stores/auth";

export default function() {
    const tokenCookie = useCookie('token');
    const userCookie = useCookie('user');
    const authStore = useAuthStore()

    const setAuth = () => {
        if (!authStore.isAuth && (userCookie.value && userCookie.value != '')) {
            authStore.setUser(userCookie.value)
        }
    }

    const isAuth = computed(() => {
        return authStore.isAuth;
    })

    const user = computed(() => {
        return userCookie.value
    })

    const token = computed(() => {
        return tokenCookie.value
    })
    
    const logout = () => {
        authStore.setUser(null)
        tokenCookie.value = null
    }

    return {setAuth, isAuth, user, token, logout}
}