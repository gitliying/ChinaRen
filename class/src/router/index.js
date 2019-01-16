import Vue from 'vue'
import Router from 'vue-router'
import axios from  'axios';

import Home from '../components/pages/Home/Home';
import Chat from '../components/pages/Chat/Chat.vue';
import ChinaRen from '../components/pages/ChinaRen/ChinaRen.vue';
import Search from '../components/pages/Search/Search.vue';
import Photos from '../components/pages/Photos/Photos.vue';

  //登陆注册 组件
import My from     '../components/pages/My/My';
import Info from '../components/pages/My/info';
import Login from '../components/pages/My/Login';
import Reg from '../components/pages/My/Reg';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/ChinaRen',
      name: 'ChinaRen',
      component: ChinaRen
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      children:[

        {path:"/",name:"Login",component:Login},
        {path:"login",name:"Login",component:Login},
        {path:"info",name:"Info",component:Info},
        {path:"reg",name:"Reg",component:Reg},
      ]
    },
  ]
})
