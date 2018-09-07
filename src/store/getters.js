// 当前用户
export const self = state => state.data.self
// 用户好友
export const friends = state => {
  // console.log(state.data.friends)
  return state.data.friends
}
// 当前页面标题
export const headerTitle = state => {
  return state.titleValue[state.title]
}
// 当前聊天好友
export const activeFriend = (state, getters) => getters.friends.find(x => x._id === state.activeId)
// 个人主页用户信息
export const person = (state, getters) => {
  let index = state.personindex
  if (index === 0) {
    return getters.self
  } else if (index === -1) {
    return {}
  } else {
    return getters.friends.find(x => x._id === index)
  }
}
// 侧边滑动栏状态对象
export const slider = state => state.sliderbar
export const nowMessageList = state => {
  let list = state.messageList
  let record = list.find(x => x._id === state.activeId)
  // console.log(record.list)
  return record ? record.list : {}
}
