<template>
  <div class="v-header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟到达
        </div>
        <div v-if='seller.supports' class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail"><span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span><span class="icon-keyboard_arrow_right"></span></div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          {{seller.bulletin}}
        </div>
      </div>
      <div class="detail-close">
        <!--<i class="icon-close"></i>-->
        x
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-header',
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail() {
        this.detailShow = true
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/icon.styl"

  .v-header
    position: relative
    color: #fff
    background: rgba(7,17,27,0.5)
    overflow: hidden
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            margin-right: 6px
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
        .name
          font-size: 16px
          font-weight: bold
          line-height: 18px
        .description
          margin-top: 8px
          line-height: 12px
          font-size: 12px
        .support
          margin-top: 10px
          margin-bottom: 2px
          font-size: 0
          .icon
            display: inline-block
            padding: 0 4px 2px 0
            vertical-align: top
            width: 12px
            height: 12px
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
            background-size: 12px 12px
            background-repeat: no-repeat
          .text
            line-height: 12px
            font-size: 10px
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 7px 8px
        height: 24px
        line-height: 24px
        background: rgba(0,0,0,0.2)
        border-radius: 7px
        font-size: 0
        .count
          padding-right: 4px
          font-size: 10px
        .icon-keyboard_arrow_right
          font-size: 10px
          line-height: 24px
    .bulletin-wrapper
      position: relative
      padding: 0 24px 0 12px
      height: 28px
      line-height: 28px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7,17,27,0.2)
      .bulletin-title
        display: inline-block
        vertical-align: top
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        margin: 0 4px
        vertical-align: top
        font-size: 12px
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        top: 8px
        font-size: 10px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(7,17,27,0.8)
      overflow: auto
      .detail-wrapper
        min-height: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
      .detail-close
        position: relative
        margin: -64px auto 0 auto
        width: 32px
        height: 32px
        font-size: 32px
</style>
