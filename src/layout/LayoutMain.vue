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
.layout-main-inner::-webkit-scrollbar {
  width: 8px !important;
}
.layout-main-inner::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
  background: #dcdfe6 !important;
}
.layout-main-inner::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
  background: #fff !important;
}
</style>
