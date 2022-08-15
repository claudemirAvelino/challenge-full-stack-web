import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
    state: () => ({
        show: false,
        message: ''
    }),
    getters: {
        config({ show, message }) {
            return { show, message }
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setToast({ show, message }) {
            this.message = message;
            this.show = show;
        },
    },
})
