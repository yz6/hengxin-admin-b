import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
    newMessageData:{
      newMessage:[]
    },
	adminInfo: {
		avatar: 'default.jpg',
        count:0
	},
}
const mutations = {
    upDateNewMessage (state,value) {
        // 变更状态
        state.newMessageData.newMessage = value
       
    }
}
const actions= {
    upDateNewMessage (context,value) {
        context.commit('upDateNewMessage',value)
    }
}



export default new Vuex.Store({
	state,
    mutations,
    actions
})
