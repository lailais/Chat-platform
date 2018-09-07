<template>
  <div class="top-wrap" :zDepth="0">
    <mu-appbar class="top-nav">
      <mu-avatar class="avatar" slot="left" :size="30" @click="showSliderBar(true)">
        <img :src="self.avatar"/>
      </mu-avatar>
      <div slot="default" class="title">
        <div class="title-item">{{headerTitle}}</div>
      </div>
      <mu-icon slot="right" color="#2e2c6b" value="search"/>
    </mu-appbar>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'TopNav',
    computed: mapGetters(['self', 'headerTitle']),
    methods: {
      ...mapMutations({
        showSliderBar: 'TOGGLE_SLIDERBAR'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top-nav
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    background #2753f4
    background -webkit-linear-gradient(left, #2753f4 0%, #7bd9e8 42%)
    background -moz-linear-gradient(left, #2753f4 0%, #7bd9e8 42%)
    background linear-gradient(to right, #2753f4 0%, #7bd9e8 42%)
    .avatar
      margin-left 12px
    .title
      padding-right 12px
      .title-item
        margin 0 auto
        width 48px
        height 34px
        line-height 30px
        text-align center
        font-weight 500
        color #fff
    .mu-icon
      margin-right 4px
</style>
