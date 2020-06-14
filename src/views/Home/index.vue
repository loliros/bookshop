<template>
  <div id="main">
      <Header />
      <Carousel />
      <HomeNav />
      <specialOffer />
        <router-view />
      <TabBar />
  </div>
</template>

<script>
import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
import Carousel from '../../components/Carousel';
import HomeNav from '../../components/HomeNav';
import SpecialOffer from '../../components/SpecialOffer';
export default {
    name : 'Home',
    components : {
        Header,
        TabBar,
        Carousel,
        HomeNav,
        SpecialOffer,
    }
}
</script>

<style scope>

</style>