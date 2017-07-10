import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {mutations} from "./mutations.js";
import {actions} from "./actions.js";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  list:[],
  footerNavActiveIndex:1,//底部导航索引
  topHeaderParam:[{//第一个参数
  	icon:"icon-search",//iconfont图标
  	text:"",//文字
  	ev:"",//事件
  	route:"/search"//路由
  },{//第二个参数
  	icon:"",
  	text:"主页",
  	ev:"",
  	route:""
  },{//第三个参数
  	icon:"",//iconfont图标
  	text:"",//文字
  	ev:"",//事件
  	route:""//路由
  }],//头部参数
  headerIsVisible:true,
<<<<<<< HEAD
  navIsVisible:true,
=======
  navIsVisible:true
>>>>>>> xfzy
}


// getters are functions
const getters = {
  //evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
