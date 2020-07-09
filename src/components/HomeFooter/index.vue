<template>
  <div id="HomeFooter">
      <p>END</p>
      <div class="box">
          <div>品质保障</div>
          <div>七天无理由退换</div>
          <div>特色服务体验</div>
          <div>帮助中心</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HomeFooter',
}
</script>

<style scope>
#HomeFooter{
    width: 100%;
    height: 150px;
}
#HomeFooter p{
    font-size: 26px;
    color: silver;
    font-weight: 700;
    text-align: center;
}
#HomeFooter .box{
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 100%;
    justify-items: center;
    cursor: pointer;
}

</style>