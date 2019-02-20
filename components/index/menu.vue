<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menu" :key="index">
        <i :class="item.type"/>{{ item.name }}<span class="arrow"/>
      </dd>
    </dl>
    <div class="detail">
      <h4>标题</h4>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: '',
      menu: [{
        type: "food",
        name: "美食"
      }, {
        type: "takeout",
        name: "外卖"
      }, {
        type:'hotel',
        name:'酒店'
      }, {
        type:'homestay',
        name:'榛果民宿'
      }, {
        type:'movie',
        name:'猫眼电影'
      }, {
        type:'airport',
        name:'机票 / 火车票'
      }, {
        type:'ktv',
        name:'休闲娱乐 / KTV'
      }, {
        type:'life',
        name:'生活服务'
      }, {
        type:'hair',
        name:'丽人 / 美发 / 医学美容'
      }, {
        type:'marry',
        name:'结婚 / 婚纱摄影 / 婚宴'
      }, {
        type:'offspring',
        name:'亲子 / 儿童乐园 / 幼教'
      }, {
        type:'sport',
        name:'运动健身 / 健身中心'
      }, {
        type:'furniture',
        name:'家装 / 建材 / 家居'
      }, {
        type:'study',
        name:'学习培训 / 音乐培训'
      }, {
        type:'health',
        name:'医疗健康 / 宠物 / 爱车'
      }, {
        type:'bar',
        name:'酒吧 / 密室逃脱'
      }]
    }
  },
  computed: {
    curdetail () {
      
    }
  },
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
