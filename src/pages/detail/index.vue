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
              <div class="original"> {{ item.original }} </div>
            </div>
            <div v-if="tab === 'vernacular' || tab === 'or_with_ver'">
              <div class="vernacular"> {{ item.vernacular }} </div>
            </div>
            <div v-if="tab === 'comment'">
              <div class="comment"> {{ item.comment }} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <div class="previous" @click.stop='change_chapter($event)'>上一章</div>
      <div class="collect" @click.stop='change_chapter($event)'><i class="material-icons">favorite_border</i></div>
      <div class="next" @click.stop='change_chapter($event)'>下一章</div>
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
        items: [
          {
            id: 0,
            original: '复次，阿难，云何六入本如来藏妙真如性？',
            vernacular: '阿难，为什么说六入本来就是如来自性妙明真如呢？',
            comment: ''
          },
          {
            id: 1,
            original: '阿难，即彼目睛瞪发劳者，兼目与劳，同是菩提瞪发劳相。',
            vernacular: '阿难，眼睛凝视已久就有了烦劳发花，而这眼睛和烦劳发花，都是菩提真如的凝视已久烦劳发花的相状。',
            comment: ''
          },
          {
            id: 2,
            original: '因于明暗两种妄尘，发见居中，吸此尘象，名为见性。',
            vernacular: '观见生起在明和暗两种尘物妄起之中，通过看而汲取了两种尘象，这就叫做观见。 ',
            comment: ''
          },
          {
            id: 3,
            original: '此见离彼明暗二尘，毕竟无体。',
            vernacular: '这个见离开了明、暗两种物象，毕竟没有自身本体。',
            comment: ''
          },
          {
            id: 4,
            original: '如是，阿难，当知是见非明暗来，非于根出，不于空生。',
            vernacular: '那么，阿难，应当知道这个见，不是从明和暗这里来，不是从眼根里来，也不是从空无里产生。',
            comment: '注释'
          },
          {
            id: 5,
            original: '何以故？',
            vernacular: '为什么呢？',
            comment: ''
          }
        ]
      }
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
      change_chapter (e) {
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
    width: 33%;
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
</style>