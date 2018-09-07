import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  // 初始化基础数据
  data: {self: {}, friends: []},
  activeId: 0,
  titleValue: {
    discover: '发现',
    friends: '联系人',
    message: '消息'
  },
  title: 'message',
  personindex: -1,
  dialog: false,
  sliderbar: {
    open: false,
    docked: true
  },
  messageList: [
    {
      _id: 1,
      list: [
        {from: 1, message: '在么?', time: '14:28', read: false},
        {from: 1, message: '在么?在不?有急事?', time: '14:30', read: false}
      ]
    },
    {
      _id: 2,
      list: [{from: 1, message: '我会很多知识', time: '9:18', read: true}]
    },
    {
      _id: 3,
      list: [{from: 1, message: '昨天为什么没上班', time: '12:23', read: false}]
    },
    {
      _id: 4, // from 1 对方发送给你的
      list: [{from: 1, message: 'vue是不是特别简单', time: '6:07', read: false}]
    }
  ]
}
// 公开Vuex Store
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
