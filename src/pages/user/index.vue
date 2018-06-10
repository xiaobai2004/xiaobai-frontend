/**
 * 个人详情页面
 **/

<template>
  <div class="container">
    <card></card>
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
      logs: []
    }
  }
}
</script>

<style scoped>
</style>
