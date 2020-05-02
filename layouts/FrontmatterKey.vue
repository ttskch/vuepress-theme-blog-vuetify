<template>
  <BaseLayout>
    <template #content>
      <h1>List of {{ $page.frontmatter.title }}s</h1>
      <v-chip
        v-for="key in $frontmatterKey._metaMap"
        small
        :to="key.path"
        class="unstyled mr-1 mb-1"
      >
        {{ key.key }}
      </v-chip>
    </template>
  </BaseLayout>
</template>
