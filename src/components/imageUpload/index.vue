<template>
  <div id="imageUpload">
    <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
  </div>
</template>

<script>
export default {
    name: 'imageUpload',
    data() {
      return {
        size:170,
        squareUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593450918745&di=3301218527c1a6124b570d092e67e64c&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1851070523%2C2016093990%26fm%3D214%26gp%3D0.jpg",
      };
    },
}
</script>

<style>
#imageUpload{
  width: 100%;
  height: 100%;
}

#imageUpload >span{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>