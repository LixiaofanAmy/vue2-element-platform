<template>
  <div>
    <company-info></company-info>
    <menu-list></menu-list>
  </div>
</template>

<script>
import CompanyInfo from './CompanyInfo.vue'
import MenuList from './MenuList.vue'
export default {
  name: 'LayoutAside',
  components: {
    CompanyInfo,
    MenuList,
  },
}
</script>

<style></style>
