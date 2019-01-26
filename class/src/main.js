// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入重置样式 
import './styles/common/base.css';

//部分引入 底部tabbar
import 'mint-ui/lib/style.css'
import { Header,Tabbar, TabItem,Swipe, SwipeItem  } from 'mint-ui';

//引入tabbar
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//引入header 固定头部
Vue.component(Header.name, Header);

//引入轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入font-awesome字体图标
import 'font-awesome/css/font-awesome.css';

import jquery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js' 

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
