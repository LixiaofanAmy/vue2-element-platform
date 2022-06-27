<template>
  <query-module :total="1000" @currentChange="currentChange">
    <template v-slot:form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input
            v-model="formInline.user"
            placeholder="审批人"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select
            v-model="formInline.region"
            placeholder="活动区域"
            clearable
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </template>
    <template v-slot:button>
      <el-button type="primary">新建</el-button>
    </template>
    <template v-slot:result>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </template>
  </query-module>
</template>

<script>
import QueryModule from '@/components/QueryModule.vue'
export default {
  name: 'TaskManagement',
  components: {
    QueryModule,
  },
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      pageNum: '',
    }
  },
  methods: {
    currentChange(pageNum) {
      this.pageNum = pageNum
    },
  },
}
</script>

<style scoped></style>
