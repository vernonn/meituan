<template>
  <div class=""></div>
</template>

<script>
export default {
  layout: 'blank',
  // 使用中间件，到达/exit页面自动执行
  middleware: async (ctx) => {
    let {status, data} = await ctx.$axios.get('/users/exit')
    if (status === 200 && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>

<style>

</style>
