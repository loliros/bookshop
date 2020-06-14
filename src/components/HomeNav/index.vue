<template>
  <div id="HomeNav">
      <ul>
          <router-link to="/home" tag="li" id="alls">
              <i></i>
              <p>全部</p>
          </router-link>
          <router-link to="/shop" tag="li" class="popularity">
              <i></i>
              <p>人气最高</p>
          </router-link>
          <router-link to="/shop" tag="li" class="hot">
              <i></i>
              <p>销量最好</p>
          </router-link>
          <router-link to="/shop" tag="li" class="collect">
              <i></i>
              <p>收藏最多</p>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name : 'HomeNav',
}
</script>

<style>
#HomeNav{ width: 100%; height: 50px;}
#HomeNav ul{ width: 100%; height: 50px; display: grid; grid-template-columns: [alls] 25% [popularity] 25% [hot] 25% [collect] 25%; grid-template-rows: repeat(1,50px); justify-items: center; align-items: center;}
#HomeNav ul p{ font-size: 14px;}
#HomeNav ul li.router-link-active{ color: #e74c3c;}
</style>