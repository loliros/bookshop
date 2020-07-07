<template>
  <div>
      <Header title="购物车"/>
      <div id="shop"></div>
      <TabBar />
  </div>
</template>

<script>
import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
export default {
    name : 'Setting',
    components : {
      Header,
      TabBar,
    }
}
</script>

<style>
#shop{
  height:80vh;
}
</style>