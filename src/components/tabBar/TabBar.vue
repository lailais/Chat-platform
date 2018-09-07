<template>
  <mu-bottom-nav>
    <mu-bottom-nav-item
      value="message" title="消息" to="/message" icon="chat_bubble_outline">
    </mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="friends" title="联系人" to='/friends' icon="people">
    </mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="discover" title="发现" to='/discover' icon="explore">
    </mu-bottom-nav-item>
  </mu-bottom-nav>
</template>
<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        bottomValue: 'message'
      }
    },
    components: {},
    methods: {
      ...mapMutations({
        refreshTitle: 'REFRESH_TITLE'
      })
    }
  }
</script>

<style lang="stylus">
.mu-bottom-item
  color grey
  &.router-link-exact-active
    color cornflowerblue
</style>
