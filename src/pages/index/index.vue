/**
 * 首页，佛经页面
 **/

<template>
  <div class="container">
    <card></card>
    <search></search>
    <div class="body">
      <div v-for="item in items" :key="item.id" class="modules" @click="read_dirs(item.id, item.display)" >{{ item.display }}</div>
    </div>
  </div>
</template>

<script src="https://unpkg.com/flyio/dist/fly.min.js"></script>
<script>
import search from '@/components/search'
import card from '@/components/card'

export default {
  data () {
    return {
      items: ''
    }
  },

  components: {
    search,
    card
  },

  created () {
    // 微信登录授权
    this.login()
    // 获取经书列表
    this.get_items()
  },

  methods: {
    // 登录授权
    login () {
    },
    // 查看经文章节目录
    read_dirs (id, name) {
      var url = '../dir/main?no_id=' + id + '&no_name=' + name
      wx.navigateTo({
        url: url
      })
    },

    // 获取经书列表
    get_items () {
      var that = this
      var Fly = require('flyio/dist/npm/wx')
      console.log(that.userInfo)
      // 创建fly实例
      var fly = new Fly()
      // query参数通过对象传递，获取藏经阅读列表
      fly.get('https://gwfy3.applinzi.com/wenbai/today_list')
        .then(function (response) {
          that.items = response.data
        })
        .catch(function (error) {
          console.log(error)
          fly.get('https://gwfy3.applinzi.com/wenbai/today_list')
            .then(function (response) {
              that.items = response.data
            })
        })
    }
  }
}
</script>

<style scoped>

.container {
  padding: 0;
}

.body {
  padding-top: 20rpx;
  width: 100%;
  font-size:32rpx;
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;
  margin-left:28rpx;
}

.modules {
  padding:0;
  background-color:#b09335;
  width:44%;
  margin:15rpx;
  box-sizing:content-box;
  height:200rpx;
  text-align:center;
  line-height:200rpx;
  color:#fff;
  border-color:#ccc;
}
  
</style>
