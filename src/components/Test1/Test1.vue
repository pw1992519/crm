<template>
   <div class="test1">
    <el-table
      :data="tableData"
      :max-height="height"
      style="width:100%;background:red;">
      <el-table-column
        prop="date"
        label="日期"  
        width="100px"
       >
      </el-table-column>
      <el-table-column
        prop="name"  
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        width="200"
        label="地址">
      </el-table-column>      
      <el-table-column
        prop="date"
        label="日期"  
        width="100px"
       >
      </el-table-column>
      <el-table-column
        prop="name" 
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        width="300"
        label="地址">
      </el-table-column>    
      <el-table-column
        prop="date"
        label="日期"  
        width="100px"
       >
      </el-table-column>
      <el-table-column
        prop="name" 
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        width="300"
        label="地址">
      </el-table-column>  
      <el-table-column
        prop="date"
        label="日期"  
        width="100px"
       >
      </el-table-column>
      <el-table-column
        prop="name" 
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        width="300"
        label="地址">
      </el-table-column>                                 
    </el-table>    

    <el-pagination
    background
    layout="prev, pager, next"
    :total="1000">
    </el-pagination>    

   </div>
</template>

<script>
   export default {
       name: '',
       data() {
           return {
            height: "",
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
           }
       },
       mounted() {
           this.height = document.body.clientHeight - 100; 
       },
       methods: {

       },
       computed: {

       },
       components: {

       }
   }
</script>

<style scoped lang='scss' >

</style>
