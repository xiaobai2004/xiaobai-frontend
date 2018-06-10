/**
 * 佛经书目页面
 **/

<template>
  <div class="container">
    <card></card>
    <div class="body">
      <div v-for="item in items" :key="item.dir_id">
        <div class="modules" @click="read_scriptures(item.dir_id, item.dir_name)">
          <div class="modules_name"> {{ no_name }} </div>
          <div class="dirs"> {{ item.dir_name }} </div>
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
      items: [
        {
          id: 0,
          name: '四十二章经',
          dir_id: 0,
          dir_name: '经序'
        },
        {
          id: 1,
          name: '四十二章经',
          dir_id: 1,
          dir_name: '出家正果'
        },
        {
          id: 2,
          name: '四十二章经',
          dir_id: 2,
          dir_name: '断欲绝求'
        },
        {
          id: 3,
          name: '四十二章经',
          dir_id: 3,
          dir_name: '出家正果'
        },
        {
          id: 4,
          name: '四十二章经',
          dir_id: 4,
          dir_name: '断欲绝求'
        },
        {
          id: 5,
          name: '四十二章经',
          dir_id: 5,
          dir_name: '出家正果'
        }
      ]
    }
  },

  components: {
    card
  },
  // 获取 URL 上传递的参数：经书 ID 和经书名称
  onLoad: function (options) {
    this.no_id = options.no_id
    this.no_name = options.no_name
  },

  methods: {
    // 查看经文章节详情
    read_scriptures (id, name) {
      const url = '../detail/main'
      wx.navigateTo({
        url: url,
        data: {
          id: id,
          name: name
        }
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
