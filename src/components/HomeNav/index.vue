<template>
  <div id="HomeNav">
      <img class="logo" src="../../../public/images/logo.png" alt="图片加载失败!">
      <ul class="nav">
          <router-link to="/home" tag="li"><i class="el-icon-s-home"></i><span>首页</span></router-link>
          <router-link to="/search" tag="li"><i class="el-icon-search"></i><span>搜索</span></router-link>
          <router-link to="/shop" tag="li"><i class="el-icon-s-shop"></i><span>购物车</span></router-link>
          <router-link to="/mine" tag="li"><i class="el-icon-user"></i><span>我的</span></router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name : 'HomeNav',
}
</script>

<style>
#HomeNav{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 60%;
    grid-template-rows: 100%;
}
.logo{
    width: 100%;
    justify-self: start;
}
#HomeNav ul{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 100%;
    width: 65%;
    height: 100%;
    align-items: end;
    justify-items: center;
}
#HomeNav ul li{
    cursor: pointer;
    transition: all 0.5s ease;
    border-bottom: 1px solid transparent;
    font-size: 18px;
    font-weight: 500;
}
#HomeNav ul li:hover{
    border-bottom: 1px solid #ff9f43;
    box-shadow: 0 1px 0 0 #ff9f43;
}
#HomeNav ul li.router-link-active{
    color: #ff9f43;
}
</style>