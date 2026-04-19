<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
      <div class="main-left"></div>
      <div class="qiankun-container">
        <qiankunView />
      </div>
    </div>
  </div>
</template>
<script>
import qiankunView from '@/components/qiankun-view.vue'
export default {
  components: {
    qiankunView
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 60px;
    background: gray;
  }
  .main {
    flex: 1;
    display: flex;
    overflow: hidden;
    .main-left {
      width: 200px;
      height: 100%;
      background: gray;
    }
    .qiankun-container {
      flex: 1;
      flex-shrink: 1;
      padding: 10px;
      overflow: hidden;
    }
  }
}
</style>
