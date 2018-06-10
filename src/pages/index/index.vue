/**
 * 首页，佛经页面
 **/

<template>
  <div class="container">
    <card></card>
    <search></search>
    <div class="body">
      <div v-for="item in items" :key="item.id" class="modules" @click="read_dirs(item.id, item.name)" >{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import search from '@/components/search'
import card from '@/components/card'

export default {
  data () {
    return {
      items: [
        {
          id: 0,
          name: '四十二章经'
        },
        {
          id: 1,
          name: '圆觉经'
        },
        {
          id: 2,
          name: '金刚经'
        },
        {
          id: 3,
          name: '心经'
        },
        {
          id: 4,
          name: '法华经'
        },
        {
          id: 5,
          name: '楞严经'
        },
        {
          id: 6,
          name: '无量寿经'
        },
        {
          id: 7,
          name: '坛经'
        },
        {
          id: 8,
          name: '法华经'
        },
        {
          id: 9,
          name: '楞严经'
        },
        {
          id: 10,
          name: '无量寿经'
        },
        {
          id: 11,
          name: '坛经'
        }
      ]
    }
  },

  components: {
    search,
    card
  },

  methods: {
    // 查看经文章节目录
    read_dirs (id, name) {
      const url = '../dir/main?no_id=' + id + '&no_name=' + name
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
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
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
