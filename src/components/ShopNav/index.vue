<template>
  <div id="ShopNav">
    <el-select v-model="value" clearable placeholder="书本类型">
      <el-option
        v-for="item in bookshop"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input
      class="search"
      suffix-icon="el-icon-search"
      placeholder="请输入搜索内容"
      v-model="input"
      clearable>
    </el-input>
  </div>
</template>

<script>
export default {
    name : 'ShopNav',
    data(){
        return {
            bookshop : [
                {value : 1 ,label : '科技'},
                {value : 2 ,label : '体育'},
                {value : 3 ,label : '文学'},
                {value : 4 ,label : '财金'},
                {value : 5 ,label : '艺术'},
                {value : 6 ,label : '社科'},
                {value : 7 ,label : '成长'},
                {value : 8 ,label : '职人'},
                ],
                value : '',
                input : '',
        }
    },
    methods : {
        
    }
}
</script>

<style scope>
#ShopNav{ width: 100%; height: 50px; display: grid; grid-template-columns: 50% 50%; grid-template-rows: 50px;}
#ShopNav input{ width: 100%; height: 50px;}
#ShopNav .search{ width: 100%; height: 50px; padding: 0; margin: 0;}
</style>