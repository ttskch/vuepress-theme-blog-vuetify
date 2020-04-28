<template>
  <BaseLayout>
    <template #content>
      <Page :page="$page" />
    </template>
    <template #sticky>
      <Sticky :page="$page" />
    </template>
    <template v-for="trackingTag in trackingTags" v-slot:[`tracking-tag-${trackingTag.label}`]>
      <div v-if="excludeTrackingTagLabels.includes(trackingTag.label)"><!-- nop element --></div>
    </template>
  </BaseLayout>
</template>

<script>
  export default {
    data: () => ({
      trackingTags: [],
      excludeTrackingTagLabels: [],
    }),
    created() {
      this.trackingTags = this.$themeConfig.trackingTags
      this.excludeTrackingTagLabels = this.$page.frontmatter.excludeTrackingTags
    },
  }
</script>
