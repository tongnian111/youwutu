export const mutations = {
	footerNavIndex (state,{navIndex}) {
		let topArr = [];
		//设定当前索引值  1-4
	    state.footerNavActiveIndex=navIndex;
	    switch (navIndex){
	    	// case  表 首页头部信息
  			case 1:topArr=[{//第一个参数
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
				  }];
  				break;
  				//  case  2  表 生活页面头部信息
  			case 2:topArr=[{//第一个参数
				  	icon:"icon-search",//iconfont图标
				  	text:"",//文字
				  	ev:"",//事件
				  	route:"/search"//路由
				  },{//第二个参数
				  	icon:"",
				  	text:"生活",
				  	ev:"",
				  	route:""
				  },{//第三个参数
				  	icon:"icon-fabu",//iconfont图标
				  	text:"",//文字
				  	ev:"",//事件
				  	route:"life/release"//路由
				  }];
  				break;
  				//case 3 表积分页面头部 信息
  			case 3:topArr=[{//第一个参数
				  	icon:"",//iconfont图标
				  	text:"",//文字
				  	ev:"",//事件
				  	route:""//路由
				  },{//第二个参数
				  	icon:"",
				  	text:"积分",
				  	ev:"",
				  	route:""
				  },{//第三个参数
				  	icon:"icon-sangedian",//iconfont图标
				  	text:"",//文字
				  	ev:"",//事件
				  	route:"integral/publicData"//路由
				  }];
  				break;
  				//case 4 表 我的页面头部信息
  			case 4:topArr=[{//第一个参数
			  	icon:"",//iconfont图标
			  	text:"",//文字
			  	ev:"",//事件
			  	route:""//路由
			  },{//第二个参数
			  	icon:"",
			  	text:"我的",
			  	ev:"",
			  	route:""
			  },{//第三个参数
			  	icon:"icon-qrcode-copy",//iconfont图标
			  	text:"",//文字
			  	ev:"",//事件
			  	route:"my/qrcode"//路由
			  }];
  				break;
	  		}
	    state.topHeaderParam = topArr;
	}
}