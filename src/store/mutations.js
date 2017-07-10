export const mutations = {
	footerNavIndex (state,{navIndex}) {
		let topArr = [];
		//设定当前索引值  1-4
	    state.footerNavActiveIndex=navIndex;
	},
	headerInfo(state,{data}){
		 state.topHeaderParam = data;
	}
}