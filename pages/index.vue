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
    <el-row >
      <el-col :span="24">
        <artistic/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MainMenu from '@/components/index/menu'
import Life from '@/components/index/life'
import Artistic from '@/components/index/artistic.vue'
export default {
  components: {
    MainMenu,
    Life,
    Artistic
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
