(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{450:function(t,e,n){},451:function(t,e,n){},474:function(t,e,n){"use strict";var o=n(450);n.n(o).a},475:function(t,e,n){"use strict";var o=n(451);n.n(o).a},479:function(t,e,n){"use strict";n.r(e);var o=n(2),c={props:{page:Object},methods:{onItemChanged:function(t,e,n){n&&n.parentNode.classList.remove("active"),e&&e.parentNode.classList.add("active")}}},i=(n(474),n(4)),s={components:{Toc:Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-toc"},[t.page.headers?n("scrollactive",{attrs:{offset:0,duration:0},on:{itemchanged:t.onItemChanged}},[n("ul",t._l(t.page.headers,(function(e){return n("li",{class:"level-"+e.reducedLevel},[n("router-link",{staticClass:"scrollactive-item",attrs:{to:"#"+e.slug}},[t._v(t._s(e.title))])],1)})),0)]):t._e()],1)}),[],!1,null,null,null).exports},props:{page:Object,require:!1},created:function(){this.beforeStickyComponent=this.getBeforeStickyComponent(),this.afterStickyComponent=this.getAfterStickyComponent()},data:function(){return{beforeStickyComponent:null,afterStickyComponent:null}},methods:{getBeforeStickyComponent:function(){return o.default.component("DefaultBeforeSticky")},getAfterStickyComponent:function(){return o.default.component("DefaultAfterSticky")}}},a=(n(475),Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-sticky"},[e(this.beforeStickyComponent,{tag:"component"}),this._v(" "),this.page?e("Toc",{attrs:{page:this.page}}):this._e(),this._v(" "),e(this.afterStickyComponent,{tag:"component"})],1)}),[],!1,null,null,null));e.default=a.exports}}]);