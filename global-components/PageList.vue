<template>
  <div class="component-page-list pb-12">
    <div v-for="page in pages">
      <PageSummary v-if="page.summary" :page="page" class="page-summary" />
      <Page v-else :page="page" class="page" />
    </div>

    <component
      :is="paginationComponent"
      v-if="this.pagination.length > 1 && paginationComponent"
      :pagination-component-name="paginationComponentName"
      class="d-flex justify-center mt-12"
    />
  </div>
</template>

<script>
  import Vue from 'vue'
  import PageSummary from '@theme/components/PageSummary'
  import VuetifyPagination from '@theme/components/Pagination'

  export default {
    components: {
      PageSummary,
    },
    props: {
      pagination: Object,
    },
    data: () => ({
      paginationComponent: null,
      paginationComponentName: PAGINATION_COMPONENT_NAME,
    }),
    methods: {
      getPaginationComponent() {
        // PAGINATION_COMPONENT_NAME
        // @see ../index.js
        return Vue.component(PAGINATION_COMPONENT_NAME) || VuetifyPagination
      },
    },
    created() {
      this.paginationComponent = this.getPaginationComponent()
    },
    computed: {
      pages() {
        return this.pagination.pages
      },
    },
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .component-page-list {
    .page-summary {
      border-bottom: 1px solid $color-grey-light;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }
    .page {
      border-bottom: 1px solid $color-grey-light;
      margin-bottom: 3rem;
      padding-bottom: 0;
    }

    .component-pagination[pagination-component-name="VuetifyPagination"] {
    }

    .pagination[pagination-component-name="Pagination"] {
      margin: 0;
      padding: 0;

      li {
        &.disabled {
          color: $color-grey;
        }
        &.active {
          a {
            background-color: $color-brand;
            border-color: $color-brand;
          }
        }
        a {
          @include unstyled-link;
        }
      }
    }

    .pagination[pagination-component-name="SimplePagination"] {
      margin: 0;
      width: 100%;
      text-align: center;

      a {
        @include unstyled-link;
        color: $color-link !important;
        &:hover {
          background: none;
          text-decoration: underline !important;
        }

        // resize
        border: none;
        border-radius: 0;
        line-height: 1;
        height: auto;
        padding: 0;
        &:first-of-type {
          margin-right: 1em;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
</style>
