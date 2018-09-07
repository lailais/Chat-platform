<template>
  <div class="container">
    <div class="top" :style="{backgroundImage: `url(${person.avatar})`}">
      <mu-appbar class="p-top" :z-depth="0">
        <mu-button icon textColor="#fff" slot="left" @click="closePersonView()">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>

        <mu-button icon textColor="#fff" slot="right">
          <mu-icon value="more_vert"></mu-icon>
        </mu-button>
      </mu-appbar>
      <div class="user">
        <mu-avatar :size="96">
          <img :src="person.avatar"/>
        </mu-avatar>
        <span class="name">{{person.name}}</span>
      </div>
      <mu-tabs class="bottom" :value.sync="active" inverse="" indicator-color="#2753f4" color="#fff" center>
        <mu-tab>TAB ITEM 1</mu-tab>
        <mu-tab>TAB ITEM 2</mu-tab>
        <mu-tab>TAB ITEM 3</mu-tab>
      </mu-tabs>
    </div>
    <div>
      <div class="demo-text" v-if="active === 0">
        <mu-list class="desc">
          <mu-list-item avatar="" button :ripple="true">
            <mu-list-item-action>
              <mu-icon value="voicemail"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>联系方式</mu-list-item-title>
              <mu-list-item-sub-title>{{person.phone}}</mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>

          <mu-list-item avatar="" button :ripple="true">
            <mu-list-item-action>
              <mu-icon value="location_on"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>地址</mu-list-item-title>
              <mu-list-item-sub-title>{{person.address}}</mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>

          <mu-list-item avatar="" button :ripple="true">
            <mu-list-item-action>
              <mu-icon value="cake"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>出生日期</mu-list-item-title>
              <mu-list-item-sub-title>{{person.birthday}}</mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="demo-text" v-if="active === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
      <div class="demo-text" v-if="active === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'PersonView',
    data() {
      return {
        active: 0
      }
    },
    computed: mapGetters(['person']),
    methods: mapMutations({closePersonView: 'TOGGLE_PERSONVIEW'})
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    position absolute
    z-index 999
    top 0
    left 0
    width 100%
    height 100vh
    background #f4f4f6
    .top
      position relative
      height 38vh
      background-size cover
      color #fff
      .p-top
        background transparent
      .user
        width 100%
        text-align center
        .name
          display block
          margin-top 4px
          font-size 1.6em
      .bottom
        position absolute
        left 0
        bottom 0
        color #dcdcdc
        background transparent
    .desc
      padding 8px 12px 0
</style>
