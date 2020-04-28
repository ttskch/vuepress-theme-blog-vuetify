<template>
  <div class="component-sticky">
    <slot name="before-toc" />
    <Toc v-if="page" :page="page" />
    <slot name="after-toc" />
  </div>
</template>

<script>
  import Toc from '@theme/components/Toc'

  export default {
    components: {
      Toc,
    },
    props: {
      page: Object,
      require: false,
    },
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .component-sticky {
    padding: 0 $sidebar-padding-x;
  }
</style>
