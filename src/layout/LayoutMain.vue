<template>
  <div class="layout-main-inner">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'LayoutMain',
}
</script>
<style scoped>
.layout-main-inner {
  height: 100%;
  overflow-y: auto;
}
</style>
