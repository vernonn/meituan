<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <main-menu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row :span="24">
      
    </el-row>
  </div>
</template>

<script>
import MainMenu from '@/components/index/menu'
import Life from '@/components/index/life'
export default {
  components: {
    MainMenu,
    Life
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
