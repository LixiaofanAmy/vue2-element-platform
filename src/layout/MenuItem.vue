<template>
  <div class="menu-item">
    <div v-for="menu in menuTree" :key="menu.nodeCode">
      <el-menu-item
        v-if="menu.childNodes.length === 0"
        :index="menu.nodeCode"
        :route="{ name: menu.menuName }"
      >
        <i :class="menu.menuIcon"></i>
        <span slot="title">{{ menu.nodeName }}</span>
      </el-menu-item>
      <el-submenu v-if="menu.childNodes.length > 0" :index="menu.nodeCode">
        <template slot="title">
          <i :class="menu.menuIcon"></i>
          <span>{{ menu.nodeName }}</span>
        </template>
        <menu-item :menuTree="menu.childNodes"></menu-item>
      </el-submenu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: ['menuTree'],
}
</script>
<style scoped></style>
