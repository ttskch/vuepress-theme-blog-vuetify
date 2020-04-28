import Vuetify from 'vuetify'
import './styles/vuetify.css' // tweaked original css
import '@mdi/font/css/materialdesignicons.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import VueScrollactive from 'vue-scrollactive'

import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'
import VuetifyPagination from './components/Pagination'

import TitleModifier from './mixins/TitleModifier'

// @see https://vuepress.vuejs.org/theme/writing-a-theme.html#app-level-enhancements
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({})

  Vue.use(VueScrollactive)

  Vue.component('Pagination', Pagination)
  Vue.component('SimplePagination', SimplePagination)
  Vue.component('VuetifyPagination', VuetifyPagination)

  Vue.mixin(TitleModifier)
}
