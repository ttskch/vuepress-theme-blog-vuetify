<template>
  <div class="component-sns-links">
    <ul class="my-0 d-flex" :style="{'font-size': fontSize}">
      <li v-for="item in sns" :style="{'margin-right': marginSize}">
        <a :href="item.url" target="_blank" rel="noopener noreferrer" :aria-label="item.type">
          <faIcon :icon="item.icon"></faIcon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import transform from 'lodash/transform'
  import pickBy from 'lodash/pickBy'
  import sortBy from 'lodash/sortBy'

  export default {
    props: {
      fontSize: {
        type: String,
        default: '1.7rem',
      },
      marginSize: {
        type: String,
        default: '0.5em',
      },
    },
    data: () => ({
      sns: {},
    }),
    created() {
      const icons = {
        twitter: ['fab', 'twitter'],
        facebook: ['fab', 'facebook-square'],
        instagram: ['fab', 'instagram'],
        github: ['fab', 'github'],
        youtube: ['fab', 'youtube'],
        feed: 'rss',
      }

      const orders = this.$themeConfig.sns.order

      let sns = Object.assign({}, this.$themeConfig.sns)
      delete sns.order

      sns = transform(sns, (result, value, key) => {
        result.push({type: key, url: value, icon: icons[key]})
      }, [])

      sns = pickBy(sns, item => !!item.url)

      this.sns = sortBy(sns, item => orders.indexOf(item.type))
    },
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .component-sns-links {
    ul {
      list-style: none;
      padding: 0;
      li {
        &:last-of-type {
          margin-right: 0 !important;
        }
      }
    }
  }
</style>
