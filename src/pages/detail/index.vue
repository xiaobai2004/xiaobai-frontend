/**
 * 经文详情页面
 **/

<template>
  <div class="container">
    <card></card>
    <div class="body">
      <div class="tabs">
        <div :class='{selected:tab == "or_with_ver"}' @click.stop='change_tab($event)' data-tab='or_with_ver'>文白</div>
        <div :class='{selected:tab == "original"}' @click.stop='change_tab($event)' data-tab='original'>原典</div>
        <div :class='{selected:tab == "vernacular"}' @click.stop='change_tab($event)' data-tab='vernacular'>译文</div>
        <div :class='{selected:tab == "comment"}' @click.stop='change_tab($event)' data-tab='comment'>注释</div>
      </div>
      <div class="dir_list">
        <div v-for="item in items" :key="item.dir_id" class="dir_item">
          <div class="text">
            <div v-if="tab === 'original' || tab === 'or_with_ver'">
              <div class="original"> {{ item.classic }} </div>
            </div>
            <div v-if="tab === 'vernacular' || tab === 'or_with_ver'">
              <div class="vernacular"> {{ item.modern }} </div>
            </div>
            <div v-if="tab === 'comment'">
              <div class="comment"> {{ item.annotation }} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <div :class="{ set_gray: prev_section_url.length === 0, focus_on: true}" @click.stop='change_chapter(prev_section_url)'>上一章</div>
      <div :class="collect" :disabled="isDisable" @click.stop='change_chapter()'><i class="material-icons">favorite_border</i></div>
      <div :class="{ set_gray: next_section_url.length === 0, focus_on: true}" @click.stop='change_chapter(next_section_url)'>下一章</div>
    </div>
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        // 默认 tab 选中文白
        tab: 'or_with_ver',
        or_with_ver: [],
        original: [],
        vernacular: [],
        comment: [],
        // 经文ID
        no_id: '',
        // 章节ID
        sec_id: '',
        // 上一节链接
        prev_section_url: '',
        // 下一节链接
        next_section_url: '',
        // 域名
        domain: 'https://gwfy3.applinzi.com',
        // 请求链接
        request_url: '',
        // 段列表
        items: ''
      }
    },

    onLoad: function (options) {
      // 设置链接
      this.no_id = options.no_id
      this.sec_id = options.id
      this.request_url = this.domain + '/wenbai/scripture/' + this.no_id + '/section/' + this.sec_id + '/sentences'
      // 设置导航栏标题
      wx.setNavigationBarTitle({
        title: options.name
      })

      // 请求章节列表
      this.get_chapter()
    },

    components: {
      card
    },

    methods: {
      // 切换 tab
      change_tab (e) {
        this.tab = e.target.dataset.tab
      },
      // 切换章节
      change_chapter (url) {
        if (url.trim().length !== 0) {
          this.request_url = this.domain + url
          this.get_chapter()
        }
      },
      // 获取章节列表
      get_chapter () {
        var that = this
        var Fly = require('flyio/dist/npm/wx')
        // 创建fly实例
        var fly = new Fly()
        // query参数通过对象传递，获取经书小节
        fly.get(that.request_url)
          .then(function (response) {
            that.items = response.data.sentences
            console.log(response.data)
            that.prev_section_url = response.data.prev_section_url
            that.next_section_url = response.data.next_section_url
            // 设置导航栏标题
            wx.setNavigationBarTitle({
              title: response.data.section_display
            })
            // 按钮置灰
            if (that.prev_section_url.length === 0) {

            }

            if (that.prev_section_url.length === 0) {

            }
          })
          .catch(function (error) {
            fly.get(that.request_url)
              .then(function (response) {
                that.items = response.data.sentences
                console.log(response.data)
                that.prev_section_url = response.data.prev_section_url
                that.next_section_url = response.data.next_section_url
                // 设置导航栏标题
                wx.setNavigationBarTitle({
                  title: response.data.section_display
                })
                // 按钮置灰
                if (that.prev_section_url.length === 0) {

                }

                if (that.prev_section_url.length === 0) {

                }
              })
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
@import '../../../static/css/material-icons.wxss';

  .container {
    padding: 0;
    height: 100%
  }

  .body {
    padding:20rpx;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
  }

  .tabs {
    display:flex;
    background-color:white;
    width:90%;
    color:#505050;
    margin:0 0 20rpx 0;
  }

  .tabs div {
    width: 25%;
    color: #909399;
    text-align: center;
    line-height:1.8em;
  }

  .tabs .selected {
    color: #303133;
    border-bottom: 2rpx solid #303133;
  }

  .dir_list {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin-bottom:120rpx;
    width:100%;
  }

  .dir_item {
    width: 96%;
  }
  .text {
    border-width:0;
    background-color:#e5e5e5;
    margin:2rpx 5px;
    border-bottom:0.5px solid #ccc;
    padding:10rpx 2rpx;
    min-height:1.4em;
  }

  .original {
    color:#000;
    font-weight:bold;
    margin:0 0 5px;
  }

  .vernacular {
    color:#0e6d0a;
    margin:5rpx 0 0;
  }

  .footer {
    display:flex;
    border:1rpx solid #ccc;
    position:fixed;
    bottom:0;
    background-color:white;
    width:100%;
    height:120rpx;
    -webkit-overflow-scrolling:touch;
    box-sizing:border-box;
    line-height:120rpx;
    color:#505050;
  }

  .fixed {
    position: fixed;
    bottom: 0px;
  }

  .footer div {
    width: 34%;
    text-align: center;
  }

  .fixed_line {
    width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0px;
    background: '#989898';
    border-top: 1px #989898 solid;
  }
  .footer .material-icons {
    line-height:inherit;
  }

  .set_gray {
    color: #ddd;
  }

  .set_black {
    color: black;
  }

  .focus_on:active {
    background-color: #e5e5e5;
  }

  .focus_on {
    border-radius: 10%;
  }
</style>