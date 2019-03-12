<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <main-menu/>
      </el-col>
      <el-col :span="19"></el-col>
    </el-row>
    <el-row :span="24">
      
    </el-row>
  </div>
</template>

<script>
import MainMenu from '@/components/index/menu'
export default {
  components: {
    MainMenu
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
