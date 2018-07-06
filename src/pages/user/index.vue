/**
 * 个人详情页面
 **/

<template>
  <div class="container">
    <card></card>
    <div class="body">
      <div class="user-info">
      <image class="pic-background" src="../../../static/pic/user_background.jpg"></image>
      <div class="box1">
          <div class="mail"><i class="material-icons md-light">mail_outline</i></div>
          <div class="settings"><i class="material-icons md-light">settings</i></div>
      </div>
      <div class="box2">
        <div><image class="avatar" src="../../../static/pic/avatar.jpeg"></image></div>
        <div class="info">
          <div class="user_name" >{{ nick_name }}</div>
          <div class="count">关注&nbsp;&nbsp;{{ attention }}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;粉丝&nbsp;&nbsp;{{ fan }}</div>
        </div>
        <div class="navigate-style"><i class="material-icons">navigate_next</i></div>
      </div>
      </div>
      <div class="menu">
        <div class="collect">
          <span class="favorite" ><i class="material-icons">favorite_border</i></span>
          <span class="text">我的收藏</span>
          <span class="navigate"><i class="material-icons">navigate_next</i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      nick_name: 'Xiaobai',
      attention: 0,
      fan: 3
    }
  }
}
</script>

<style scoped>
  @import '../../../static/css/material-icons.wxss';

  .container {
    padding: 0;
  }

  .body {
    padding:20rpx;
    width:100%;
  }

  .user-info {
    width: 100%;
    height: 500rpx;
    position: relative;
  }

  .pic-background {
    width: 100%;
    height: 500rpx;
    position: absolute;
    background-color: #ccc;
  }

  .box1 {
    width: 100%;
    position: absolute;
    height: 50rpx;
    margin-top:30rpx;
    margin-bottom:20rpx
  }

  .box2 {
    width: 100%;
    position: absolute;
    height: 260rpx;
  }

  .mail {
    float: left;
    padding-left:40rpx;
    color: white;
  }

  .settings {
    float: right;
    padding-right:40rpx;
    color: white;
  }

  .avatar {
    border-radius: 50%;
    border: 7rpx white solid;
    width: 152rpx;
    height: 152rpx;
    float: left;
    overflow: hidden;
    background-color: #ccc;
    margin-top: 160rpx;
    margin-left: 50rpx;
  }

  .info {
    float:left;
    margin-left:30rpx;
    width:220rpx;
    height:120rpx;
    margin-top:190rpx;
    font-size:30rpx;
  }

  .count {
    width: 100%;
    height: 50rpx;
    font-size: 25rpx;
  }

  .user_name {
    width: 100%;
    height: 70rpx;
  }

  .menu {
    width: 100%;
    height: 80rpx;
    margin-top: 20rpx;
    line-height: 80rpx;
    left: 0rpx;
    color:#505050;
    background-color: white;
    border: 2rpx #989898 solid;
    border-left: none;
    border-right: none;
  }

  .text {
    color: black;
    vertical-align: top;
    line-height: inherit;
    font-size: 30rpx;
  }

  .navigate {
    float: right;
    margin-right:10rpx;
  }

  .navigate-style {
    float: right;
    margin-top: 220rpx;
    margin-right:40rpx;
    color: white;
  }

  .material-icons {
    width: 12%;
    text-align: center;
    line-height: inherit;
    font-size: 50rpx;
  }
</style>
