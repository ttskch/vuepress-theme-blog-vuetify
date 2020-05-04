module.exports = {
  title: 'vuepress-theme-blog-vuetify',
  description: '💥The world\'s most simple, beautiful and customizable 2 columns VuePress blog theme built with Vuetify',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', type: 'image/png' }],
    ['script', { src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-575387ee08aaabea' }],
  ],
  markdown: {
    lineNumbers: true
  },
  theme: 'blog-vuetify',
  themeConfig: {
    globalPagination: {
      lengthPerPage: 3,
    },
    sidebar: {
      profile: {
        avatarUrl: 'https://avatars2.githubusercontent.com/u/4360663',
        name: 'ttskch',
        subTitle: 'Web Programmer',
        descriptionHtml: 'You can describe yourself here <strong>with html</strong>.',
      },
      additionalBlocks: [
        {
          title: 'Pages',
          links: [
            { label: 'PROFILE', path: '/profile' },
          ],
        },
      ],
    },
    footer: {
      links: [
        { label: 'PROFILE', path: '/profile' },
      ],
    },
    sns: {
      twitter: 'https://twitter.com/ttskch',
      github: 'https://github.com/ttskch/vuepress-theme-blog-vuetify/',
      feed: '',
    },
    seo: {
      baseUrl: 'https://vuepress-theme-blog-vuetify.ttskch.com',
      author: 'https://www.facebook.com/ttskch',
      image: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gece2yx70lj30zk0nnq7z.jpg',
      fbAppId: '186549258503363',
      twitterSite: '@ttskch',
      twitterCreator: '@ttskch',
      articleDirectoryNames: [
        '_posts',
        '_pages',
      ],
    },
    ga: 'UA-156973649-4',
    summary: 300,
    dateFormat: 'YYYY/MM/DD',
  },
}
