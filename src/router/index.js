import Vue from 'vue'
import Router from 'vue-router'
/*****************首页引入开始**********************/
import Default from '@/components/default/Default';
import DefaultPhone from '@/components/default/Phone';
import PhoneDetail from '@/components/default/PhoneDetail';

/*****************首页引入结束**********************/

/*****************生活引入开始**********************/
import Life from '@/components/life/Life';
import Release from '@/components/life/Release';

/*****************生活引入结束**********************/

/*****************积分引入开始**********************/
import Integral from '@/components/integral/Integral';
import PublicData from '@/components/integral/PublicData';
import Jifen from '@/components/integral/Jifen';
import Tiyan from '@/components/integral/Tiyan';
import Order from '@/components/integral/Order';

/*****************积分引入结束**********************/

/*****************我的引入开始**********************/
import My from '@/components/my/My';
import Register from '@/components/my/Register';
import Login from '@/components/my/Login';
import Qrcode from '@/components/my/Qrcode';
/*****************我的引入结束**********************/

/******************搜索页面开始*********************/
import Search from '@/components/public/Search';
/******************搜索页面结束*********************/

Vue.use(Router);

export default new Router({
	/****************首页路由到开始**********************/
	routes: [{
			path: '/',
			name: 'Default',
			component: Default,
		},
		{
			path: '/phone',
			name: 'DefaultPhone',
			component: DefaultPhone
		},
		{
			path: '/phonedetail',
			name: 'PhoneDetail',
			component: PhoneDetail
		} /****************首页路由到此结束**********************/ ,
		/****************生活页面路由开始**********************/
		{
			path: '/life',
			name: 'Life',
			component: Life
		},
		{
			path: '/release',
			name: 'Release',
			component: Release
		}
		/****************生活路由页面到结束**********************/
		,
		/****************积分页面路由到开始**********************/
		{
			path: '/integral', //积分主页
			name: 'Integral',
			component: Integral
		},
		{
			path: '/publicData',
			name: 'PublicData',
			component: PublicData
		},
		{
			path: '/jifen',
			name: 'Jifen',
			component: Jifen
		},
		{
			path: '/tiyan',
			name: 'Tiyan',
			component: Tiyan
		},
		{
			path: '/order',
			name: 'Order',
			component: Order
		}
		/****************积分路由页面到结束**********************/
		,
		/****************我的页面路由到开始**********************/
		{
			path: '/my',
			name: 'My',
			component: My
		},
		{
			path: '/qrcode',
			name: 'Qrcode',
			component: Qrcode
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		}
		/****************我的页面路由到结束**********************/
		,
		/****************公用路由到开始**********************/
		{
			path: '/search', //搜索
			name: 'Search',
			component: Search
		}
		/****************公用路由到结束**********************/
	]
})