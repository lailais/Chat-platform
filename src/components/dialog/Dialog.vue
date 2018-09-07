<template>
  <div class="dialog">
    <mu-appbar style="width: 100%;background: #fff">
      <mu-button icon class="button" slot="left" @click="closeDialog">
        <mu-icon color="#2e2c6b" value="arrow_back"></mu-icon>
      </mu-button>
      {{activeFriend.name}}
      <div slot="right" class="right-nav">
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="videocam"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="call"></mu-icon>
        </mu-button>
        <mu-button icon class="button"  @click="togglePersonView(activeFriend._id)">
          <mu-icon color="#2e2c6b" value="person"></mu-icon>
        </mu-button>
      </div>
    </mu-appbar>
    <!--聊天内容区域-->
    <div class="content" ref="contentWrapper">
      <ul>
        <li v-for="(msg,index) in nowMessageList" class="list clearfix" :key="index">
          <mu-avatar class="avatar" :class="{self: !msg.from}" @click="togglePersonView(msg.from?activeFriend._id:0)">
            <img :src="msg.from ? activeFriend.avatar : self.avatar">
          </mu-avatar>
          <span class="msg" :class="{self: !msg.from}">{{msg.message}}</span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="top">
        <mu-text-field v-model="value" placeholder="Please input......" @keyup.13="send"></mu-text-field>
        <mu-button icon class="button" @click="send">
          <mu-icon color="#2e2c6b" value="send"></mu-icon>
        </mu-button>
      </div>
      <div class="bottom">
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="mic_none"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="photo_size_select_actual"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="tag_faces"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="switch_video"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="cloud_queue"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="photo_camera"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="folder_open"></mu-icon>
        </mu-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  //  import Split from "../split.vue";
  import BScroll from 'better-scroll'

  export default {
    name: 'Dialog',
//    components: {Split},
    data() {
      return {
        value: '',
        BScroll: null
      }
    },
    mounted() {
//      console.log('渲染完毕,处理已读未读消息')
      this.readMessage()
      this._initScroll()
    },
    computed: mapGetters(['activeFriend', 'nowMessageList', 'self']),
    methods: {
      ...mapActions(['closeDialog', 'sendValue']),
      ...mapMutations({
        togglePersonView: 'TOGGLE_PERSONVIEW',
        readMessage: 'READ_MESSAGE'
      }),
      send() {
        if (this.value.length) {
          this.sendValue({_id: this.activeFriend._id, message: this.value, that: this})
          this.value = ''
        }
      },
      _initScroll() {
        if (!this.BScroll) {
          this.BScroll = new BScroll(this.$refs.contentWrapper, {
            click: true
          })
        } else {
          this.BScroll.refresh() // 刷新
        }
        // 切记在创建bScroll实例时,一定要确保该容器内部子元素完全渲染在页面上(BScroll)会根据内容元素计算用户最大滑动偏移量
      }
    },
    watch: {
      nowMessageList() {
        this.readMessage()
        this._initScroll()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .clearfix:after
    content "" //设置内容为空
    height 0 //高度为0
    line-height 0 //行高为0
    display block //将文本转为块级元素
    visibility hidden //将元素隐藏
    clear both

  //清除浮动

  .content
    width 100vw
    height 80vh
    overflow hidden

  .dialog
    position absolute
    z-index 200
    top 0
    left 0
    width 100%
    height 100vh
    background #fafafa
    .mu-appbar-left
      padding-right 0
    .mu-appbar-title
      padding-left 0
    .content
      width 100%
      .list
        padding 0 4vw
        margin 2vh 0
        .avatar
          float left
          &.self
            float right
        .msg
          display inline-block
          background #fff
          margin 0 2vw
          padding 1.5vh
          max-width 50vw
          word-wrap break-word
          vertical-align top
          border-radius 4px
          &.self
            float right
            color #fff
            background #5dc9f5
    .footer
      position fixed
      bottom 0
      left 0
      width 100%
      height 90px
      text-align center
      background #fff
      .top
        display: flex
        justify-content center
        padding 0 18px
        .mu-input
          flex 1
          margin-bottom 0
</style>
