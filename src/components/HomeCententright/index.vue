<template>
  <div id="HomeCentent">
      <p><span class="left">特价优惠</span><span class="right">更多>>></span></p>
      <div class="centent">
          <img :src="imgSrc[2].src" alt="图片加载失败!">
          <div><p>{{imgSrc[2].centent}}</p></div>
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
                    centent : '小说主要描绘了一个名叫斗罗大陆的武魂世界。唐门外门弟子唐三，因偷学内门绝学而为唐门所不容，跳崖明志时却发现穿越到另一个世界，即斗罗大陆的圣魂村。这里没有魔法，没有武术，没有战斗力，却有神奇的武魂。这里的每个人在6岁的时候，都会在武魂殿中在魂师的帮助下进行武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的曰常生活，有特殊天赋的人可以用之修炼并进行战斗。唐三一步步修炼武魂，由人修炼为神，最终铲除了斗罗大陆上的邪恶力量，报了杀母之仇，成为斗罗大陆最强者的故事。'
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
    white-space: normal;
    text-indent: 25px;
    height: 90%;
    font-size: 14px;
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    /* 显示省略号 */
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
</style>