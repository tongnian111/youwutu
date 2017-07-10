import Vue from 'vue'
import Router from 'vue-router'
/*****************首页引入开始**********************/
import Default from '@/components/default/Default';


/*****************首页引入结束**********************/

/*****************积分引入开始**********************/
import Integral from '@/components/integral/Integral';
import PublicData from '@/components/integral/comps/PublicData';
import IntegralContents from '@/components/integral/comps/Contents';

/*****************积分引入结束**********************/

/*****************生活引入开始**********************/
import Life from '@/components/life/Life';
import Release from '@/components/life/comps/Release';
import LifeContents from '@/components/life/comps/Contents';
/*****************生活引入结束**********************/

/*****************我的引入开始**********************/
import My from '@/components/my/My';
import Register from '@/components/my/comps/Register';
import Login from '@/components/my/comps/Login';
import Qrcode from '@/components/my/comps/Qrcode';
import MyContents from '@/components/my/comps/Contents';
/*****************我的引入结束**********************/

/******************搜索页面开始*********************/
import Search from '@/components/public/Search';
/******************搜索页面结束*********************/

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },{
      path: '/my',
      name: 'My',
      component: My,
      children: [
      		{
						path: '',
						name: 'MyContents',
						component: MyContents
					},
      		{
						path: 'qrcode',
						name: 'Qrcode',
						component: Qrcode
					},{
			      path: 'register',
			      name: 'Register',
			      component: Register
			    },{
			      path: 'login',
			      name: 'Login',
			      component: Login
			    }
      ]
    },{
      path: '/life',
      name: 'Life',
      component: Life,
      children:[
      		{
						path: '',
						name: 'LifeContents',
						component: LifeContents
					},
      		{
      			path: 'release',
						name: 'Release',
						component: Release
      		}
      		
      ]
    },{
      path: '/integral',//积分主页
      name: 'Integral',
      component: Integral,
      children:[
        {
          path: '',
          name: 'IntegralContents',
          component: IntegralContents
        },
        {
          path: 'publicData',
          name: 'PublicData',
          component: PublicData
        }
      ]
    },{
      path: '/search',//搜索
      name: 'Search',
      component: Search
    }
  ]
})
