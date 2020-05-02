<template>
  <div class="component-sticky">
    <component :is="beforeStickyComponent" />

    <Toc v-if="page" :page="page" />

    <component :is="afterStickyComponent" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toc from '@theme/components/Toc'

  export default {
    components: {
      Toc,
    },
    props: {
      page: Object,
      require: false,
    },
    created() {
      this.beforeStickyComponent = this.getBeforeStickyComponent()
      this.afterStickyComponent = this.getAfterStickyComponent()
    },
    data: () => ({
      beforeStickyComponent: null,
      afterStickyComponent: null,
    }),
    methods: {
      getBeforeStickyComponent: () => Vue.component(BEFORE_STICKY_COMPONENT_NAME),
      getAfterStickyComponent: () => Vue.component(AFTER_STICKY_COMPONENT_NAME),
    },
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .component-sticky {
    padding: 0 $sidebar-padding-x;
  }
</style>
