/**
 * 搜索组件
 **/

<template>
	<div class="search">
    	<input class="input" type="text" placeholder="查找佛经/古籍"><i class="search-icon material-icons" @click.stop="search($event)">search</i>
    </div>
</template>

<script>
	export default {
	  data () {
	    return {}
	  },
	  methods: {search (e) {}}
	}
</script>

<style scoped>
	@import '../../static/css/material-icons.wxss';

	.search {
		border:0.5rpx solid #ccc;
		position:relative;
		width:98%;
		margin-top:20rpx;
	}

	.search input{
		width:100%;
	    border:0;
	    height:20px;
	    text-align:center;
	    font-weight:300;
		font-size:28rpx;
	}
	.search input::-webkit-input-placeholder{
		text-align:center;  
	}
	.search-icon {
		position:absolute;
		right:0;
		top:0;
		color:#383838;
	}
</style>