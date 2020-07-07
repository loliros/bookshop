<template>
  <div class="box">
    <div class="img">
      <img :src="imgAnimotion[number].src" alt="">
    </div>
    <ul>
      <li v-for="(item,number) in imgAnimotion" :key="number" @click="addImg(number)">
        <img :src="item.src">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name : 'order',
    data(){
      return{
        img : '',
        number : 0,
        imgAnimotion:[
          {
            value: 1,
            src: '/img/1.f5e3e3b6.png',
            name: '1',
          },
          {
            value: 2,
            src: '/img/2.589e97c7.png',
            name: '2',
          },
          {
            value: 3,
            src: '/img/3.826ef017.jpg',
            name: '3',
          },
          {
            value: 4,
            src: '/img/4.80bb9871.png',
            name: '4',
          },
        ]
      }
    },
    methods : {
      addImg(number){
        this.number = number;
      }
    },
    created(){
      setInterval(() =>{
          this.number++;
          if(this.number === 4){
            this.number = 0;
          }
      },2000)
    }
}
</script>

<style>
.box{
  width: 100%;
  height: 100vh;
}
.img{
  width: 25%;
  height: 50vh;
  background: red;
  margin: 20px;
}
.img > img{
  width: 200px;
}
.box ul li{
  float: left;
}

.box ul li img{
  width: 50px;
}
</style>