export const actions = {
	//这里相当于react的 dispatch
	footerNavIndex: ({ commit },{navIndex}) =>{
		commit('footerNavIndex',{navIndex})
	},
	headerInfo:({ commit },{data}) =>{
		commit('headerInfo',{data})
	}
}