<template>
  <footer id="footer">
      <ul>
          <router-link to="/home" tag="li">
              <p>首页</p>
          </router-link>
            <router-link to="/shop" tag="li">
              <p>书店</p>
          </router-link>
            <router-link to="/mine" tag="li">
              <p>我的</p>
          </router-link>
      </ul>
  </footer>
</template>

<script>
export default {
    name : 'TabBar',
}
</script>

<style>
#footer{ width: 100%; height:50px; background: white; border-top: 2px solid #ebe8e3; position: fixed; bottom: 0;}
#footer ul{ display: flex; text-align: center; height:50px; align-items: center; justify-items: center;}
#footer ul li{ flex:1; height: 40px;}
#footer ul li.active{ color: #f03d37;}
#footer ul li.router-link-active{ color: #f03d37;}
#footer ul p{ font-size: 12px; line-height: 18px;}
</style>