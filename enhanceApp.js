import Vuetify from 'vuetify'
import './styles/vuetify.css' // tweaked original css

import '@mdi/font/scss/materialdesignicons.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas, far)

import VueScrollactive from 'vue-scrollactive'

import TitleModifier from './mixins/TitleModifier'

import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'
import VuetifyPagination from './components/Pagination'

import DefaultBeforeSidebar from './components/extensions/BeforeSidebar'
import DefaultAfterSidebar from './components/extensions/AfterSidebar'
import DefaultBeforeSticky from './components/extensions/BeforeSticky'
import DefaultAfterSticky from './components/extensions/AfterSticky'
import DefaultBeforePageList from './components/extensions/BeforePageList'
import DefaultBeforePagination from './components/extensions/BeforePagination'
import DefaultAfterPageList from './components/extensions/AfterPageList'
import DefaultBeforePage from './components/extensions/BeforePage'
import DefaultBeforePageSection from './components/extensions/BeforePageSection'
import DefaultAfterPage from './components/extensions/AfterPage'
import DefaultAfterFooter from './components/extensions/AfterFooter'

// @see https://vuepress.vuejs.org/theme/writing-a-theme.html#app-level-enhancements
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify)
  options.vuetify = new Vuetify()

  Vue.use(VueScrollactive)

  Vue.mixin(TitleModifier)

  Vue.component('Pagination', Pagination)
  Vue.component('SimplePagination', SimplePagination)
  Vue.component('VuetifyPagination', VuetifyPagination)
  Vue.component('faIcon', FontAwesomeIcon)

  Vue.component('DefaultBeforeSidebar', DefaultBeforeSidebar)
  Vue.component('DefaultAfterSidebar', DefaultAfterSidebar)
  Vue.component('DefaultBeforeSticky', DefaultBeforeSticky)
  Vue.component('DefaultAfterSticky', DefaultAfterSticky)
  Vue.component('DefaultBeforePageList', DefaultBeforePageList)
  Vue.component('DefaultBeforePagination', DefaultBeforePagination)
  Vue.component('DefaultAfterPageList', DefaultAfterPageList)
  Vue.component('DefaultBeforePage', DefaultBeforePage)
  Vue.component('DefaultBeforePageSection', DefaultBeforePageSection)
  Vue.component('DefaultAfterPage', DefaultAfterPage)
  Vue.component('DefaultAfterFooter', DefaultAfterFooter)
}
