import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({
        baseURL: 'http://localhost:3000/api',
        headers: {
            Accept: 'application/json'
        }
    })
    return {
        provide: {
            api
        }
    }
})
