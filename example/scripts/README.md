# What's this?

In order to develop this theme on local env, we have to do three things below.

* On theme project root directory, do `npm link` to create symlink onto `/usr/local/lib/node_modules/vuepress-theme-blog-vuetify`
* On blog source directory, do `npm install --no-save ...` to install some dependencies which is needed to build the blog correctly
* On blog source directory, do `npm link vuepress-theme-blog-vuetify` to use `/usr/local/lib/node_modules/vuepress-theme-blog-vuetify`
