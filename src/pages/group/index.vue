/**
 * 义工-文白小程序页面
 **/

<template>
  <div class="container">
    <card></card>
    <div class="body">
	    <div class="about">
	    	<div class="about_message">
		    	{{ about_message }}
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
      about_message: '文白佛典智能翻译，让我们更接近佛经'
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
	}

	/** 文白项目的意义 **/
	.about {
		width:98%;
		height:200rpx;
		background-color:#aeb75d;
		text-align:center;
		box-shadow:0 0 0 2rpx rgba(166, 166, 166, 1);
		margin-left:1%;
		color:#fff;
		display:flex;
		flex-wrap:wrap;
		justify-content:center;
		align-items:center;
	}
</style>
