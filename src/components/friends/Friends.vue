<template>
  <div class="friends">
    <div class="header-1">
      <mu-icon class="icon" value="assignment-ind"></mu-icon>
      <span class="text">Sync phone contacts</span>
      <mu-button icon class="button">
        <mu-icon value="chevron_right"></mu-icon>
      </mu-button>
    </div>
    <div class="header-2">
      <mu-tabs class="tab" full-width center indicator-color="transparent">
        <mu-tab>
          <mu-icon color="#2196F3" value="person_add"></mu-icon>
          New Friend
        </mu-tab>
        <mu-tab>
          <mu-icon color="#FFC107" value="people"></mu-icon>
          Group
        </mu-tab>
        <mu-tab>
          <mu-icon color="#4CAF50" value="person"></mu-icon>
          Official Accour
        </mu-tab>
      </mu-tabs>
    </div>
    <div class="title">
      <span>My Device</span>
    </div>
    <mu-list class="message" textline="two-line">
      <mu-list-item avatar="" button ripple>
        <mu-list-item-action>
          <mu-avatar>
            <mu-icon value="folder"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>Mac</mu-list-item-title>
          <mu-list-item-sub-title>You are my destiny</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <span class="time">14:15</span>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <div class="title">
      <span>My Friends</span>
    </div>
    <mu-list class="message">
      <mu-list-item class="user" v-for="f in friends" :key="f._id" avatar="" button ripple @click="showDialog(f._id)">
        <mu-list-item-action>
          <mu-avatar>
            <img :src="f.avatar">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-title>{{f.name}}</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="chat_bubble"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Friends',
    computed: mapGetters(['friends']),
    methods: mapActions(['showDialog'])
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .friends
    .header-1
      position relative
      height 8vh
      text-align center
      .icon
        position absolute
        top 50%
        left 10%
        width 25px
        overflow hidden
        transform translate(-50%, -50%)
        color #2e2c6b
      .button
        position: absolute
        top 50%
        right 0
        transform translateY(-50%)
      .text
        line-height 8vh
        font-size 1.2em
    .header-2
      padding 0 1vw
      background: #fff
      .tab
        background transparent
        .mu-tab
          color #2e2c6b
    .title
      padding-left 4vw
      height 6vh
      line-height 6vh
    .message
      background #fff
      .user
        border-bottom 1px solid rgba(0, 0, 0, 0.1)

</style>
