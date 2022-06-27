<template>
  <div class="layout-container">
    <div class="layout-aside">
      <layout-aside></layout-aside>
    </div>
    <div class="layout-body">
      <div class="layout-header">
        <layout-header></layout-header>
      </div>
      <div class="layout-main">
        <layout-main></layout-main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutAside from '@/layout/LayoutAside.vue'
import LayoutHeader from '@/layout/LayoutHeader'
import LayoutMain from '@/layout/LayoutMain'
export default {
  name: 'ViewsPage',
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutMain,
  },
}
</script>

<style scoped>
.layout-container {
  height: 100%;
  display: flex;
}
.layout-aside {
  flex-shrink: 0;
  width: 200px;
  overflow-x: hidden;
  background-color: #34495e;
}
.layout-body {
  flex-shrink: 0;
  width: calc(100vw - 200px);
  height: 100%;
}
.layout-header {
  height: 80px;
}
.layout-main {
  height: calc(100vh - 80px);
}
</style>
