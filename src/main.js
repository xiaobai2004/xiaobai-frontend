import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/group/main', '^pages/index/main', 'pages/user/main', 'pages/detail/main', 'pages/dir/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '佛经-文白小程序',
      navigationBarTextStyle: 'black'
    },

    'tabBar': {
      color: '#909399',
      selectedColor: '#303133',
      borderStyle: 'black',
      'list': [{
        'pagePath': 'pages/index/main',
        'text': '佛经',
        'iconPath': 'static/icon/square.png',
        'selectedIconPath': 'static/icon/square_selected.png'
      }, {
        'pagePath': 'pages/group/main',
        'text': '义工',
        'iconPath': 'static/icon/group.png',
        'selectedIconPath': 'static/icon/group_selected.png'
      }, {
        'pagePath': 'pages/user/main',
        'text': '我的',
        'iconPath': 'static/icon/user.png',
        'selectedIconPath': 'static/icon/user_selected.png'
      }]
    }
  }
}
