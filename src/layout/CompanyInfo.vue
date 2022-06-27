<template>
  <div class="company">
    <span class="company-logo"
      ><img src="./images/chips.png" width="40" height="40"
    /></span>
    <span class="company-name">薯条责任有限公司薯条责任有限公司</span>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo',
}
</script>

<style scoped>
.company {
  display: flex;
  height: 40px;
  padding: 20px 10px;
  line-height: 40px;
}
.company-name {
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-emphasis: none;
  font-size: 14px;
  color: #fff;
}
</style>
