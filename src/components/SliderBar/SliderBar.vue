<template>
  <mu-drawer :open="slider.open" :docked="slider.docked" @close="closeSliderBar()">
    <div class="content">
      <div class="top">
        <mu-avatar :size="96" @click="showPersonView()">
          <img :src="self.avatar"/>
        </mu-avatar>
        <span class="name">{{self.name}}</span>
      </div>
      <div class="bottom">
        <span>{{self.explain}}</span>
      </div>
    </div>
    <mu-list>
      <mu-list-item button :ripple="true">
        <mu-list-item-action>
          <mu-icon value="inbox"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>albums</mu-list-item-title>
      </mu-list-item>

      <mu-list-item button :ripple="true">
        <mu-list-item-action>
          <mu-icon value="grade"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Favorites</mu-list-item-title>
      </mu-list-item>

      <mu-list-item button :ripple="true">
        <mu-list-item-action>
          <mu-icon value="send"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Wallet</mu-list-item-title>
      </mu-list-item>

      <mu-list-item button :ripple="true">
        <mu-list-item-action>
          <mu-icon value="drafts"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Files</mu-list-item-title>
      </mu-list-item>

      <mu-list-item button :ripple="true" @click="closeSliderBar">
        <mu-list-item-action>
          <mu-icon value="close"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Close</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'SliderBar',
    computed: mapGetters(['self', 'slider']),
    methods: {
      ...mapMutations({
        closeSliderBar: 'TOGGLE_SLIDERBAR',
        togglePersonView: 'TOGGLE_PERSONVIEW'
      }),
      showPersonView() {
        this.closeSliderBar()
        this.togglePersonView(0)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mu-drawer
    color #2e2c6b
    .content
      position relative
      height 30vh
      padding-top 1px
      /*margin-bottom 50px*/
      .top
        padding 20px
        .name
          position absolute
          top 6vh
          left 53%
          display inline-block
          font-size 1.8em
      .bottom
        padding 20px
        padding-left 40px
        font-size 1.1em

</style>
