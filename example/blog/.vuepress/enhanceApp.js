import AfterFooter from './components/AfterFooter'

// @see https://vuepress.vuejs.org/theme/writing-a-theme.html#app-level-enhancements
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('MyAfterFooter', AfterFooter)
}
