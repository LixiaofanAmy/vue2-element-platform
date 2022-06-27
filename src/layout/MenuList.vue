<template>
  <el-menu
    class="menu-list"
    :router="true"
    :default-active="nodeCode"
    text-color="#99a3ae"
    active-text-color="#fff"
    background-color="#34495e"
  >
    <menu-item :menuTree="menuTree"></menu-item>
  </el-menu>
</template>
<script>
import MenuItem from './MenuItem.vue'
import { getMenuList } from '@/apis/layout'
export default {
  name: 'MenuList',
  data() {
    return {
      menuTree: [],
    }
  },
  computed: {
    nodeCode() {
      return this.$store.state.nodeCode
    },
  },
  components: {
    MenuItem,
  },
  mounted() {
    this.InitMenuList()
  },
  methods: {
    InitMenuList() {
      return getMenuList().then((res) => {
        this.menuTree = res.data
        const oMenu = this.getDefaultMenu()
        this.$store.commit('changeFirstMenu', {
          oMenu,
          menuName: this.$route.name,
        })
      })
    },
    getDefaultMenu() {
      const findMenuUrl = (oMenu) => {
        if (oMenu.childNodes.length === 0) {
          return oMenu
        } else {
          return findMenuUrl(oMenu.childNodes[0])
        }
      }
      return findMenuUrl(this.menuTree[0])
    },
  },
}
</script>
<style scoped>
.menu-list {
  height: calc(100vh - 80px);
  overflow: scroll;
  border-right: 0;
}
</style>
