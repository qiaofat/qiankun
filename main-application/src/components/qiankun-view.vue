<template>
  <div class="micro-list">
    <section
      :id="`${service.serviceName}`"
      v-for="(service, index) in serviceList"
      :key="index"
      class="qiankun-view"
      :class="{ active: isActive(service) }"
    ></section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import startQiankun from '@/qiankun'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['serviceList'])
  },
  mounted() {
    startQiankun()
  },
  methods: {
    isActive(item) {
      const flag = this.$route.path.startsWith(`/${item.serviceName}`)
      return flag
    }
  }
}
</script>
<style lang="scss" scoped>
.micro-list {
  height: 100%;
}
.qiankun-view {
  height: 100%;
  display: none;
  &.active {
    display: block;
  }
  ::v-deep {
    & > div {
      height: 100%;
    }
  }
}
</style>
