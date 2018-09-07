// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from './muse-ui.config'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// var VueTouch = require('vue-touch')
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(VueAxios, axios)
Vue.use(MuseUI)
Vue.config.productionTip = false
router.replace('message')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  beforeCreate() {
    this.$store.dispatch('getAllData', this)
  }
})

router.beforeEach((to, from, next) => {
  let path = to.path
  if (path === '/discover' || path === '/friends' || path === '/message') {
    store.commit('CHANGE_TITLE', to.name)
  }
  next()
})
