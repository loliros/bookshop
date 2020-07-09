<template>
  <div class="Nav">
      <ul class="box">
          <router-link to="/home" tag="li"><i class="el-icon-s-home"></i><span>首页</span></router-link>
          <router-link to="/search" tag="li"><i class="el-icon-search"></i><span>搜索</span></router-link>
          <router-link to="/shop" tag="li"><i class="el-icon-s-shop"></i><span>购物车</span></router-link>
          <router-link to="/mine" tag="li"><i class="el-icon-user"></i><span>我的</span></router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name : 'Nav'
}
</script>

<style>
#Nav{
    width: 90%;
    height: 100%;
}
#Nav .box{
    width: 100%;
    height: 100%;
}
#Nav .box li{
    display: flex;
}
</style>