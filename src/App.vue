<template>
  <div id="app">
    <div class="container-top">
      <TopNav></TopNav>
    </div>
    <div class="container-content">
      <div class="path"></div>
      <router-view></router-view>
      <div class="path"></div>
    </div>
    <div class="container-bottom">
      <TabBar></TabBar>
    </div>
    <!--防止罩层遮挡 左侧弹出框-->
    <SliderBar style="z-index: 20141226"></SliderBar>
    <!--个人主页-->
    <PersonView class="my-person" v-show="personindex !== -1"></PersonView>
    <!--聊天对话框-->
    <Dialog v-if="dialog"></Dialog>
  </div>
</template>

<script>
  import TopNav from './components/topNav/TopNav'
  import SliderBar from './components/Sliderbar/SliderBar.vue'
  import TabBar from './components/tabBar/TabBar.vue'
  import PersonView from './components/personview/personView.vue'
  import Dialog from './components/dialog/Dialog.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'App',
    components: {
      TopNav,
      SliderBar,
      TabBar,
      PersonView,
      Dialog
    },
    computed: mapState(['personindex', 'dialog'])
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container-top
    position fixed
    top 0
    left 0
    width 100%
    height 46px
    z-index 100
    .drawer
      position fixed
      top 0
      left 0
      width 6vw
      height 100%

  .container-content
    width 100%
    .path
      position relative
      top 0
      left 0
      width 100%
      height 50px

  .container-bottom
    position fixed
    z-index 10
    bottom 0
    left 0
    width 100%
    height 50px

</style>
