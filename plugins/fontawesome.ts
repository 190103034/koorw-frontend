import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faW } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(fas, far, faWhatsapp, faInstagram, faTelegram)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})