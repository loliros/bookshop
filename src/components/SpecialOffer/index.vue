<template>
  <div id="speciaoffer">
    <div class="header">
        <span>特价书籍</span>
        <ul>
            <li>科技</li>
            <li>前沿</li>
            <li>财商</li>
            <li>文学</li>
            <li>艺术</li>
            <li>更多</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name : 'SpecialOffer',
}
</script>

<style scope>
#speciaoffer{ width: 98%; height: 150px; border-radius: 4px; border:1px solid #bdc3c7; margin: 0 auto;}
#speciaoffer .header span{ font-size: 18px; font-weight: 700; float: left; width: 20%; padding: 5px;}
#speciaoffer .header ul{ position: absolute; right: 30px; padding: 5px; display: grid; grid-template-columns:20% 20% 20% 20% 20% 20%; align-items: center; justify-items: center;}
#speciaoffer .header ul li{font-size: 12px;}
#speciaoffer .header ul li:hover{ color: #e74c3c;}
</style>