import * as types from './mutation-types'
// that Vue实例对象 this.$
export const getAllData = async ({commit}, that) => {
  // es7 asyn函数
  let res = await that.axios.get('/api/self')
  let self = res.data.data

  res = await that.axios.get('/api/friends')
  let friends = res.data.data

  commit(types.RECEIVE_DATA, {self, friends})
}

export const showDialog = ({commit}, id) => {
  commit(types.CHANGE_ACTIVEID, id)
  commit(types.SHOW_DIALOG)
}

export const closeDialog = ({commit}) => {
  commit(types.CHANGE_ACTIVEID, 0)
  commit(types.CLOSE_DIALOG)
}
export const sendValue = async ({commit}, {_id, message, that}) => {
  // 声明变量存储ajax获取数据
  let robotData = ''
  // 将自己的数据添加到数据列表
  commit(types.CHANGE_LIST, {from: 0, message: message, read: true})

  let res = await that.axios.get('/api/robot', {params: {message, id: _id}})
  // console.log(res.data.data)
  robotData = JSON.parse(res.data.data)
  if (robotData.code === 100000) {
    // 修改聊天列表数据
    commit(types.CHANGE_LIST, {from: 1, message: robotData.text, read: false})
  } else if (robotData.code === 200000) {
    let data = robotData.text + robotData.url
    // 修改数据
    commit(types.CHANGE_LIST, {from: 1, message: data, read: false})
  } else {
    // 修改数据 "暂不支持此类对话"
    commit(types.CHANGE_LIST, {from: 1, message: '不支持此类信息', read: false})
  }
}
