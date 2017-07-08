export const actions = {
	//这里相当于react的 dispatch
	footerNavIndex: ({ commit },{navIndex}) =>{
		commit('footerNavIndex',{navIndex})
	},
}