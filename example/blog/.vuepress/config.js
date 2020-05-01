module.exports = {
  title: 'vuepress-theme-blog-vuetify',
  description: '💥The world\'s most simple, beautiful and customizable 2 columns VuePress blog theme built with Vuetify',
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
    },
    footer: {
      links: [
        { label: 'ABOUT', path: '/about' },
      ],
    },
    sns: {
      twitter: 'https://twitter.com/ttskch',
      facebook: 'https://www.facebook.com/ttskch',
      github: 'https://github.com/ttskch',
    },
    seo: {
      baseUrl: 'https://vuepress-theme-blog-vuetify.github.io',
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
    // ga: 'UA-000000000-0',
    trackingTags: [
      { label: 'addThis', snippet: `<!-- Go to www.addthis.com/dashboard to customize your tools --><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-575387ee08aaabea"></script>`, position: 'head'},
    ],
    summary: 300,
    dateFormat: 'YYYY/MM/DD',
  },
  markdown: {
    lineNumbers: true
  },
}
