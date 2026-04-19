<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-wrapper">
    <h2 class="title">首页</h2>
    <el-button
      type="primary"
      size="small"
      @click="$router.push('/flowView')"
    >floview页面</el-button>
    <el-button
      type="primary"
      size="small"
      @click="$router.push('/micro-son/device')"
    >去子应用</el-button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-wrapper {
  .title {
    text-align: center;
  }
}
</style>
