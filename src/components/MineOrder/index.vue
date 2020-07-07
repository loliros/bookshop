<template>
  <div id="Order">
    <Header title="订单"/>
    <ul>
      <li v-for="(item,value) in order" :key="value" @click="box(value)">
        <div class="button">
          <span>{{item.time}}</span>
          <span>总价格:{{item.value}}</span>
          <span>书籍数量:{{item.number}}</span>
        </div>
        <div :class="{'active': currentIndex === value}" class="cententBox">
          <div class="detailed">
            <span>书籍名称</span>
            <span>书籍价格</span>
            <span>书籍数量</span>
            <span>书籍备注</span>
          </div>
          <div v-for="(item,index) in item.book" :key="index" class="detailed">
              <span>{{item.name}}</span>
              <span>{{item.value}}</span>
              <span>{{item.number}}</span>
              <span>{{item.remarks}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '../Header';
export default {
    name: 'MineOrder',
    components : {
      Header,
    },
    data(){
      return{
        currentIndex : null,
        order : [
          {
            id : 1,
            time : '2020年6月29日15:33',
            number : 1,
            value : 530,
            book: [
              {
                name: '啦啦啦4',
                value: 530,
                number: 1,
                remarks:'空',
              }
            ],
          },
                    {
            id : 2,
            time : '2020年6月29日15:33',
            number : 1,
            value : 530,
            book: [
              {
                name: '啦啦啦4',
                value: 530,
                number: 1,
                remarks:'空',
              }
            ],
          },
          {
            id : 3,
            time : '2020年6月29日17:33',
            number : 3,
            value : 1500,
            book: [
              {
                name: '啦啦啦1',
                value: 500,
                number: 1,
                remarks:'空',
              },
              {
                name: '啦啦啦2',
                value: 500,
                number: 1,
                remarks:'空',
              },
              {
                name: '啦啦啦3',
                value: 500,
                number: 1,
                remarks:'空',
              },
            ],
          },
          {
            id : 4,
            time : '2020年6月29日21:33',
            number : 10,
            value : 7241,
          },
                    {
            id : 4,
            time : '2020年6月29日21:33',
            number : 10,
            value : 7241,
          },
                    {
            id : 4,
            time : '2020年6月29日21:33',
            number : 10,
            value : 7241,
          },
                    {
            id : 4,
            time : '2020年6月29日21:33',
            number : 10,
            value : 7241,
          },
                    {
            id : 4,
            time : '2020年6月29日21:33',
            number : 10,
            value : 7241,
          },
                    {
            id : 20,
            time : '2020年6月29日21:33',
            number : 20,
            value : 7241,
          },
        ],
      }
    },
    methods : {
      box(value){
        if(this.currentIndex === value){
          this.currentIndex = null;
          console.log(this.currentIndex);
        }else{
          this.currentIndex = value;
          console.log(this.currentIndex);
        }
      }
    }
}
</script>

<style>
#Order{
  width: 100%;
  height: 42vh;
}
#Order>ul{
  height: 80%;
  overflow-y: scroll;
}
#Order>ul>li{
  margin: 5px;
  padding: 5px;
}
#Order ul li .button{
  border: 1px solid #bdc3c7;
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: repeat(10%);
}
#Order ul li .cententBox{
  border: 1px solid #bdc3c7;
  display: none;
}
#Order ul li .detailed{
  border-bottom: 1px solid #bdc3c7;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
#Order ul li .cententBox.active{
  display: block;
}
</style>