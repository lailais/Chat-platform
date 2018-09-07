<template>
  <div class="friends">
    <div class="header-1">
      <mu-tabs class="tab" full-width center indicator-color="transparent">
        <mu-tab>
          <mu-icon color="#FFC107" value="star" size="32"></mu-icon>
          Morment
        </mu-tab>
        <mu-tab>
          <mu-icon color="#FF4081" value="location_on" size="32"></mu-icon>
          Nearby
        </mu-tab>
        <mu-tab>
          <mu-icon color="#866BFF" value="terrain" size="32"></mu-icon>
          Interest
        </mu-tab>
      </mu-tabs>
    </div>
    <div class="header-2">
      <mu-list>
        <mu-list-item avatar="" button :ripple="true">
          <mu-list-item-action>
            <mu-icon color="#64dd17" value="videocam"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Live</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar="" button :ripple="true">
          <mu-list-item-action>
            <mu-icon color="#d84315" value="video_library"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Video</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar="" button :ripple="true">
          <mu-list-item-action>
            <mu-icon color="#1976d2" value="headset"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Music</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="header-3">
      <mu-list>
        <mu-list-item avatar="" button :ripple="true">
          <mu-list-item-action>
            <mu-icon color="#1e88e5" value="book"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Book</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar="" button :ripple="true">
          <mu-list-item-action>
            <mu-icon color="#ef6c00" value="whatshot"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>News</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar="" button :ripple="true">
          <mu-list-item-action>
            <mu-icon color="#00e5ff" value="videogame_asset"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Game</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="header-4">
      <mu-list>
        <mu-list-item avatar="" button :ripple="true">
          <mu-list-item-action>
            <mu-icon value="shopping_cart" color="#1e88"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Mucket</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .header-1
    padding 0 1vw
    background #fff
    .tab
      background transparent
      height 82px
    .mu-tab
      color #2e2c6b

  .header-2
    margin-top 15px
    padding 0 1vw
    background #fff
    .mu-ripple-wrapper
      border-bottom 1px solid rgba(0, 0, 0, .1)

  .header-3
    margin-top 15px
    padding 0 1vw
    background #fff
    .mu-ripple-wrapper
      border-bottom 1px solid rgba(0, 0, 0, .1)

  .header-4
    margin-top 15px
    padding 0 1vw
    background #fff
</style>
