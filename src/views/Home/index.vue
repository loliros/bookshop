<template>
  <div id="Home">
    <Header title="江浪书店"/>
    <div class="body">
      <HomeNav class="homeNav"/>
      <div class="Carousel">
        <Carousel />
      </div>
      <div class="cententleft"><HomCentent /></div>
      <div class="cententright">246</div>
      <div class="footer">底部</div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import HomeNav from '../../components/HomeNav';
import HomCentent from '../../components/HomeCentent'
export default {
    name : 'Home',
    components : {
        Header,
        Carousel,
        HomeNav,
        HomCentent,
    }
}
</script>

<style scope>
.body{
  margin: 10px auto;
  width: 90%;
  height: 100vh;
  display: grid;
  grid-template-areas:  'nav nav nav nav'
                        'Carousel Carousel Carousel Carousel'
                        'cententleft cententleft  cententright cententright'
                        'footer footer footer footer';
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 15% 50% 25% 10%;
}
.homeNav{
  grid-area: nav;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(5,20%);
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;
}
.homeNav li{
  padding: 5px;
  border: none;
  cursor: pointer;
}
.Carousel{
  grid-area: Carousel;
  width: 100%;
  margin: auto;
}
.cententleft{
  grid-area: cententleft;
  width: 100%;
  height: 90%;
  border: 1px solid silver;
}
.cententright{
  grid-area: cententright;
  width: 100%;
  height: 90%;
  border: 1px solid silver;
}
.footer{
  width: 100%;
  height: 100%;
  grid-area: footer;
  align-self: center;
  justify-self: center;
  border: 1px solid silver;
}
</style>