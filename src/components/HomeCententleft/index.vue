<template>
  <div id="HomeCentent">
      <p><span class="left">特价优惠</span><span class="right">更多>>></span></p>
      <div class="centent">
          <img :src="imgSrc[0].src" alt="图片加载失败!">
          <div><p>{{imgSrc[0].centent}}</p></div>
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
                    centent : '一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！一个少年从大荒中走出，一切从这里开始……'
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
    width: 100%;
    height: 24.5vh;
    clear: both;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 100%;
    border-top: 1px solid silver;
}
#HomeCentent .centent img{
    width: 70%;
    justify-self: center;
    align-self: center;
}
#HomeCentent .centent > div{
    border-left: 1px solid silver;
}
#HomeCentent .centent > div > p{
    margin: 5px;
    text-indent: 25px;
}
</style>