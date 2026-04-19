<template>
  <div id="mirco-app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#mirco-app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
