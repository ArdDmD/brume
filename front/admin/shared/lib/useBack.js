// import {useFetch, useRuntimeConfig} from "nuxt/app";
//
// export async function useBack (url, query, method) {
//     const config = useRuntimeConfig()
//     console.log('dadadad')
//     let{error, data,refresh} = await useFetch(url, {
//         baseURL: config.public.apiBase,
//         credentials: 'include',
//         headers: { //bearer
//             Accept: 'application/json',
//         },
//         method: method || 'GET'
//     })
//     console.log('nenenenen')
//     // if (error.value && error.value.response?.status === 401) {
//     //     console.error(error)
//     // }
//
//     return { data: data, refresh: refresh };
// }
