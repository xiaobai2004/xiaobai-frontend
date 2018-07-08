/**
 * 佛经书目页面
 **/

<template>
  <div class="container">
    <card></card>
    <div class="body">
      <div v-for="(item, index) in section_id_list">
        <div class="modules" @click="read_scriptures(item, section_display_list[index])">
          <div class="modules_name"> {{ no_name }} </div>
          <div class="dirs"> {{ section_display_list[index] }} </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import card from '@/components/card'

export default {
  data () {
    return {
      // 经书ID
      no_id: '',
      // 经书名称
      no_name: '',
      // 经书目录列表
      section_id_list: '',
      section_display_list: ''
    }
  },

  components: {
    card
  },
  // 获取 URL 上传递的参数：经书 ID 和经书名称
  onLoad: function (options) {
    this.no_id = options.no_id
    this.no_name = options.no_name

    var that = this
    var Fly = require('flyio/dist/npm/wx')
    // 创建fly实例
    var fly = new Fly()
    // query参数通过对象传递，获取经书小节
    fly.get('https://gwfy3.applinzi.com/wenbai/scripture/' + that.no_id + '/section_id_list')
      .then(function (response) {
        that.section_id_list = response.data.section_id_list
        that.section_display_list = response.data.section_display_list
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  methods: {
    // 查看经文章节详情
    read_scriptures (id, name) {
      const url = '../detail/main?no_id=' + this.no_id + '&no_name=' + this.no_name + '&id=' + id + '&name=' + name
      wx.navigateTo({
        url: url
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
  }
  .modules {
    padding: 0;
    background-color: #aeb75d;
    width: 88%;
    display: flex-box;
    margin: 2% auto 4%;
    box-sizing: content-box;
    border:0.5rpx solid #ccc;
  }
  .modules_name {
    height:200rpx;
    text-align:center;
    line-height:200rpx;
    color:#fff;
  }
  .dirs {
    height: 100rpx;
    line-height: 100rpx;
    padding: 0 20rpx;
    background-color: #fff;
  }
</style>
