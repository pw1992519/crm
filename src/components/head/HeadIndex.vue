<template>
   <div class="headBox">
       <i class="el-icon-menu" :class="{'active': slideBol}" @click="changeSlideBol"></i>
   </div>
</template>

<script>
//    import ajax from '@/assets/js/common/util' 
   import { mapState } from 'vuex'
   import { mapActions } from 'vuex'

   export default {
       name: 'HeadIndex',
       data() {
           return {
              
           }
       },
       computed: {
           ...mapState(["slideBol"]),
       },
       mounted() {
           
       },
       methods: {
           ...mapActions(["changeSlideBol"]),
       },
       components: {

       }
   }
</script>

<style scoped lang='scss' >
    .headBox{
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        background: dodgerblue;
        .el-icon-menu{
            font-size: 30px;
            color: white;
        }
        .active{
            color: red;
        }
    }
</style>
