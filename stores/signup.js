export const useSignupStore = defineStore('signup', {
    state: () => ({
        blockId: Number,
        username: String,
        phone: String,
    }),
    actions: {
        setFirstStep(blockId) {
            this.blockId = blockId
        },
        setSecondStep(username, phone) {
            this.username = username
            this.phone = phone
        }
    },
    getters: {
        getInfo(state) {
            return state
        }
    }
})