// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
//导入ajax
import VueResource from "vue-resource";
Vue.use(VueResource);
//导入cookie
import VueCookie from 'vue-cookie';
Vue.use(VueCookie);
//注册mint-ui
import {Checklist,Loadmore,Popup,Button,Navbar, TabItem, TabContainer, TabContainerItem,Progress} from "mint-ui";
//注册下拉刷新组件
Vue.component(Loadmore.name, Loadmore);
Vue.component(Popup.name, Popup);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Progress.name, Progress);
Vue.component(Checklist.name, Checklist);
//引入  store 
import store from './store/store.js';


Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;//表单提交
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
