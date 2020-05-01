#!/bin/sh

# get absolute path of this directory
SCRIPT_DIR=$(cd $(dirname $0) && pwd)

BLOG_SRC_DIR=$(cd $SCRIPT_DIR && cd .. && pwd)
THEME_SRC_DIR=$(cd $SCRIPT_DIR && cd ../.. && pwd)

cd $THEME_SRC_DIR
npm link

cd $BLOG_SRC_DIR
npm install --no-save \
@fortawesome/fontawesome-free \
@mdi/font \
@vuepress/plugin-blog \
@vuepress/plugin-google-analytics \
@vuepress/plugin-medium-zoom \
@vuepress/plugin-nprogress \
@vuepress/plugin-search \
dayjs \
lodash \
remove-markdown \
sass \
sass-loader \
vue-scrollactive \
vuepress \
vuepress-plugin-seo \
vuetify
npm link vuepress-theme-blog-vuetify
