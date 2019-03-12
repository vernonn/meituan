<template>
  <div class="m-geo">
    <i class="el-icon-location"/>{{$store.state.geo.position.city}}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[天津 沈阳 哈尔滨]
  </div>
</template>

<script>
</script>

<style lang="scss">
</style>
