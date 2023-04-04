// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseApi: "http://localhost"
        }
    },
    typescript: {
        shim: false
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/variables.scss";'
                }
            }
        }
    },
    build: { 
        transpile: ['@fortawesome/vue-fontawesome']
    },
    css: [
        '~/assets/css/reset.css', 
        '~/assets/scss/main.scss', 
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        [
          '@nuxtjs/i18n',
          { 
            strategy: 'no_prefix',
            defaultLocale: 'ru',
            locales: [
                'ru',
                'kk', 
                'en'
            ],
          }
        ],
        [
            '@pinia/nuxt',
            {}
        ]
    ],
    pinia: {
        autoImports: [
            'defineStore',
        ],
    }
})
