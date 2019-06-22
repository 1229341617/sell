<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div id="tab">
      <div class="tab-item">
        <router-link to="/Goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/header/header'

  const ERR_OK = 0

  export default {
    name: 'app',
    data () {
      return {
        seller: {}
      }
    },
    components: {
      'v-header': Header
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        res = res.body
        if (res.errorno === ERR_OK) {
          this.seller = res.data
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    #tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-bottom: 1px solid rgba(1, 17, 27, 0.1)
      .tab-item
        flex: 1
        text-align: center
        &>a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
