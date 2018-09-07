<template>
  <mu-list textline="two-line" class="message" v-if="messageList&&messageList.length">
    <v-touch ref="swiper"
             class="wrap"
             v-for="(item,index) in messageListData"
             :key="item._id"
             v-on:swipeleft="onSwipeLeft(index)"
             v-on:swiperight="onSwipeRight(index)">
      <mu-list-item class="message-item"
                    avatar="" ripple button
                    @click="showDialogRestMessageItem(item._id)">
        <mu-list-item-action>
          <mu-avatar>
            <img :src="item.avatar">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>{{item.name}}</mu-list-item-title>
          <mu-list-item-sub-title>
            <span style="color: rgba(0, 0, 0, .87)">{{item.message}}</span>
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>{{item.time}}</mu-list-item-after-text>
          <mu-badge :content="item.unread" :color="item.unread==='0'?'':'red'"></mu-badge>
        </mu-list-item-action>
      </mu-list-item>
      <div class="delete" @click="removeMessage(item._id)">删除</div>
    </v-touch>
  </mu-list>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'Message',
    computed: {
      ...mapState(['messageList']),
      ...mapGetters(['friends']),
      messageListData() {
        let result = []
        this.messageList.forEach(m => {
          let currentFriend = this.friends.find(f => f._id === m._id)
          let list = m.list
          let num = 0
          list.forEach(l => {
            if (!l.read) {
              num++
            }
          })
          result.push({...currentFriend, ...list[list.length - 1], unread: num + ''})
        })
        return result
      }
    },
    methods: {
      ...mapActions(['showDialog']),
      ...mapMutations({removeMessage: 'REMOVE_MESSAGE'}),
      onSwipeLeft(index) {
        this.$refs.swiper[index].$el.style.transform = 'translateX(-20vw)'
      },
      onSwipeRight(index) {
        // console.log(this.$refs.swiper[index].$el)
        this.$refs.swiper[index].$el.style.transform = 'translateX(0)'
      },
      showDialogRestMessageItem(id) {
        this.restMessageItem()
        this.showDialog(id)
      },
      restMessageItem() {
        this.$refs.swiper.forEach(item => {
          item.$el.style.transform = 'translateX(0)'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .message
    overflow hidden
    background #fff
    .wrap
      width 120vw
      overflow hidden
      transition all 0.3s linear
      height 10vh
      .message-item
        display inline-block
        width 100vw
        height 100%
        border-bottom 1px solid rgba(7, 17, 27.0 .1)
      .delete
        float right
        position relative
        top -1px
        height 100%
        line-height 10vh
        width 20vw
        text-align center
        font-size 1.2em
        color #fff
        background #ff1744
</style>
