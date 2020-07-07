<template>
  <div>
      <Header title="搜索"/>
      <div id="search">
          <ShopNav />
          <ShopContent />
      </div>
      <TabBar />
  </div>
</template>

<script>
import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
import ShopNav from '../../components/ShopNav';
import ShopContent from '../../components/ShopContent';
export default {
    name : 'Shop',
    components : {
      Header,
      TabBar,
      ShopNav,
      ShopContent,
    }
}
</script>

<style scope>
#search{
  height: 80vh;
}
</style>