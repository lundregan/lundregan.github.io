// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faUserAstronaut, faPencilRuler, faTerminal, faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faPlay, faUserAstronaut, faPencilRuler, faTerminal, faCodeBranch)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)
}