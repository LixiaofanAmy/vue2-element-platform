<template>
  <div class="layout-container">
    <div class="layout-aside">
      <layout-aside></layout-aside>
    </div>
    <div
      class="layout-container layout-container-direction layout-container-flex"
    >
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
.layout-container-direction {
  flex-direction: column;
}
.layout-container-flex {
  flex: 1;
}
.layout-aside {
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #34495e;
}
.layout-aside::-webkit-scrollbar {
  width: 8px;
}

.layout-aside::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgb(33, 50, 66);
}

.layout-aside::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgb(52, 73, 94);
}
.layout-header {
  height: 80px;
}
.layout-main {
  flex: 1;
  overflow: hidden;
}
</style>
