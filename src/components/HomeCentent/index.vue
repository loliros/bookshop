<template>
  <div id="HomeCentent">
      <p><span class="left">特价优惠</span><span class="right">更多>>></span></p>
      <div class="centent" >
          <div v-for="(item,value) in imgSrc" :key="value">
            <img :src="item.src" alt="图片加载失败!">
            <p>{{item.centent}}</p>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name : 'HomeCentent',
    data(){
        return{
            imgSrc : [
                {
                    id : 1,
                    src : '/images/s1.jpg',
                    centent : '一二三'
                },
                {
                    id : 2,
                    src : '/images/s2.jpg',
                    centent : '一二三'
                },
                {
                    id : 3,
                    src : '/images/s3.jpg',
                    centent : '一二三'
                },
                {
                    id : 4,
                    src : '/images/s4.jpg',
                    centent : '一二三'
                },
            ]
        }
    }
}
</script>

<style scope>
#HomeCentent p .left{
    font-size: 18px;
    font-weight: 600;
    color: #74b9ff;
    margin: 10px;
    display: block;
    float: left;
}
#HomeCentent p .right{
    font-size: 12px;
    color: #74b9ff;
    margin: 10px;
    display: block;
    float: right;
    cursor: pointer;
}
#HomeCentent .centent{
    clear: both;
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 100%;
    justify-items: center;
}
#HomeCentent .centent > div{

    margin: 5px;
}
#HomeCentent .centent > div p{
    font-size: 12px;
    text-align: center;
}
#HomeCentent .centent >div img{
    height: 80px;
}
</style>