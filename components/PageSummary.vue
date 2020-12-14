<template>
  <article :key="page.key" class="component-page-summary">
    <header class="mb-1">
      <div class="metadata">
        <div class="d-flex">
          <div v-if="page.frontmatter.date" class="published-at">
            <faIcon icon="clock" />
            <time :datetime="page.frontmatter.date">
              {{ resolvePostDate(page.frontmatter.date) }}
            </time>
          </div>
          <div v-if="page.frontmatter.update" class="updated-at ml-3">
            <faIcon icon="sync-alt" />
            <time :datetime="page.frontmatter.update">
              {{ resolvePostDate(page.frontmatter.update) }}
            </time>
          </div>
          <div v-if="page.frontmatter.author" class="author ml-3">
            <span class="name">
              <faIcon icon="user" />
              <router-link :to="`/author/${page.frontmatter.author}`">{{ page.frontmatter.author }}</router-link>
            </span>
            <span v-if="page.frontmatter.location" class="location">
              in {{ page.frontmatter.location }}
            </span>
          </div>
        </div>
      </div>


      <h2 class="mt-1 mb-2">
        <router-link :to="page.path">{{ page.title }}</router-link>
      </h2>

      <div v-if="this.tags.length" class="tags">
        <v-chip
          v-for="tag in this.tags"
          x-small
          :key="tag.key"
          :to="tag.path"
          class="unstyled mr-1 mb-1"
        >
          {{ tag.key }}
        </v-chip>
      </div>
    </header>

    <section>
      <div v-if="page.frontmatter.summary">
        {{ page.frontmatter.summary }}
      </div>
      <div v-else v-html="page.summary" />
    </section>
  </article>
</template>

<script>
  import dayjs from 'dayjs'
  import TagResolver from '@theme/mixins/TagResolver'

  export default {
    mixins: [
      TagResolver,
    ],
    props: {
      page: Object,
    },
    methods: {
      resolvePostDate(date) {
        return dayjs(date).format(this.$themeConfig.dateFormat)
      },
    },
    computed: {
      tags() {
        return this.resolveTags(this.page.frontmatter.tags, this.$tag._metaMap)
      },
    },
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .component-page-summary {
    header {
      h2 {
        font-size: 1.5rem !important;
        a {
          @include unstyled-link;
          &:hover {
            color: $color-brand !important;
          }
          display: block;
        }
      }
      .metadata {
        font-size: 0.8rem;
        color: $color-grey;
      }
      .tags {
        font-size: 0.8rem;
      }
    }

    section {
      color: $color-grey;
    }
  }
</style>
