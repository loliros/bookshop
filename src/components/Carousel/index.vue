<template>
    <div class="block">
        <el-carousel trigger="click">
        <el-carousel-item v-for="(item,value) in imgSrc" :key="value">
            <img class="Carousel" :src="item.src" alt="图片加载失败">
        </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name : 'Carousel',
    data(){
        return{
            imgSrc : [
                {
                    id : 1,
                    src : '/images/1.png',
                },
                {
                    id : 2,
                    src : '/images/2.png',
                },
                {
                    id : 3,
                    src : '/images/3.jpg',
                },
                {
                    id : 4,
                    src : '/images/4.png',
                }
            ]
        }
    }
}
</script>

<style scope>
.Carousel{
    width: 100%;
}
</style>