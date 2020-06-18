<template>
  <div id="main">
    <div id="Home">
      <Header />
      <Carousel />
      <HomeNav />
      <specialOffer />
    </div>
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
#Home{ height:90vh;}
</style>