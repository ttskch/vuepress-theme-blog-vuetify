<template>
  <div class="component-page-list pb-12">
    <component :is="beforePageListComponent" />

    <div v-for="page in pages">
      <PageSummary :page="page" class="page-summary" />
    </div>

    <component :is="beforePaginationComponent" />

    <component
      :is="paginationComponent"
      v-if="this.pagination.length > 1 && paginationComponent"
      :pagination-component-name="paginationComponentName"
      class="d-flex justify-center mt-12"
    />

    <component :is="afterPageListComponent" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import PageSummary from '@theme/components/PageSummary'

  export default {
    components: {
      PageSummary,
    },
    props: {
      pagination: Object,
    },
    created() {
      this.paginationComponent = this.getPaginationComponent()
      this.beforePageListComponent = this.getBeforePageListComponent()
      this.beforePaginationComponent = this.getBeforePaginationComponent()
      this.afterPageListComponent = this.getAfterPageListComponent()
    },
    computed: {
      pages() {
        return this.pagination.pages
      },
    },
    data: () => ({
      paginationComponentName: PAGINATION_COMPONENT_NAME, // just for correct styling
      paginationComponent: null,
      beforePageListComponent: null,
      beforePaginationComponent: null,
      afterPageListComponent: null,
    }),
    methods: {
      getPaginationComponent: () => Vue.component(PAGINATION_COMPONENT_NAME),
      getBeforePageListComponent: () => Vue.component(BEFORE_PAGE_LIST_COMPONENT_NAME),
      getBeforePaginationComponent: () => Vue.component(BEFORE_PAGINATION_COMPONENT_NAME),
      getAfterPageListComponent: () => Vue.component(AFTER_PAGE_LIST_COMPONENT_NAME),
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
