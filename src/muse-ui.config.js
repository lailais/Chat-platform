import 'muse-ui/lib/styles/base.less'
import {AppBar, Avatar, Icon, Drawer, List, BottomNav, Button, Tabs, TextField, Badge} from 'muse-ui'
import {retina} from 'muse-ui/lib/utils' // 高分辨率处理

const components = [AppBar, Avatar, Icon, Drawer, List, BottomNav, Button, Tabs, TextField, Badge]

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.use(component)
    })
    retina()
  }
}
