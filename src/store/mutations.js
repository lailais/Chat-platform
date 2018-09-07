import * as types from './mutation-types'

const mutations = {
  [types.RECEIVE_DATA](state, data) {
    // 将获取的ajax数据赋值给state,data
    state.data = data
    // console.log('success', data)
  },
  // 侧边栏
  [types.TOGGLE_SLIDERBAR](state, flag) {
    state.sliderbar.open = !state.sliderbar.open
    state.sliderbar.docked = !flag
  },
  [types.CHANGE_TITLE](state, title) {
    state.title = title
  },
  [types.TOGGLE_PERSONVIEW](state, index) {
    state.personindex = index !== undefined ? index : -1
    // console.log(state.personindex, index)
  },
  [types.SHOW_DIALOG](state) {
    state.dialog = true
  },
  [types.CLOSE_DIALOG](state) {
    state.dialog = false
  },
  [types.CHANGE_ACTIVEID](state, id) {
    state.activeId = id
  },
  [types.GET_INFO](state) {
    if (state.data.friends.length > 0 && state.messageList.length > 0) {
      for (var i = 0; i < state.messageList.length; i++) {
        state.messageList[i].name = state.data.friends.find(x => x._id === state.messageList[i]._id).name
        state.messageList[i].avatar = state.data.friends.find(x => x._id === state.messageList[i]._id).avatar
      }
    }
  },
  [types.READ_MESSAGE](state) {
    // 获取当前用户聊天信息队列
    let record = state.messageList.find(msg => msg._id === state.activeId)
    if (record) {
      record.list.forEach((m) => {
        m.read = true
      })
    }
  },
  // 删除消息
  [types.REMOVE_MESSAGE](state, id) {
    let record = state.messageList.find(msg => msg._id === id)
    let index = state.messageList.indexOf(record)
    console.log(index)
    state.messageList.splice(index, 1)
  },
  [types.CHANGE_LIST](state, obj) {
    let list = state.messageList
    let record = list.find(x => x._id === state.activeId)
    let now = new Date()
    let time = `${now.getHours()}:${now.getMinutes()}`
    record.list.push({...obj, time})
  }
}

export default mutations
