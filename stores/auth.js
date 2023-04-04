export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    actions: {
        setUser(user) {
            this.user = user
        }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        isAuth(state) {
            return state.user != null
        }
    }
})