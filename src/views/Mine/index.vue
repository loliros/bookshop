<template>
  <div>
      <Header title="我的"/>
      <div class="Nav"><Nav /></div>
      <div id="Mine">
        <div class="upload"><Upload /></div>
        <div class="usermassage">
          <div>
            <div><span>姓名:</span><span>{{name}}</span></div>
            <div><span>电话:</span><span>{{phone}}</span></div>
            <div><span>地址:</span><span>{{address}}</span></div>
          </div>
        </div>
        <div class="cententnav">
          <div>
            <router-link to="/mine/collect" tag="div"><i class="el-icon-collection"></i><span>收藏</span></router-link>
            <router-link to="/mine/order" tag="div"><i class="el-icon-s-order"></i><span>订单</span></router-link>
            <router-link to="/mine/setting" tag="div"><i class="el-icon-setting"></i><span>设置</span></router-link>
          </div>
        </div>
        <div class="centent"><router-view /></div>
      </div>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Upload from '../../components/imageUpload';
import Nav from '../../components/HomeNav';
export default {
    name : 'Mine',
    components : {
      Header,
      Upload,
      Nav,
    },
    data(){
      return{
        name: '啦啦啦',
        phone: '123456798',
        address: 'xxxxxxxx',
      }
    }
}
</script>

<style scope>
#Mine{
  border: 5px solid #bdc3c7;
  margin: 0 auto;
  width:80%;height: 84vh;
  display: grid;
  grid-template-areas: 'upload usermassage'
                       'cententnav centent';
  grid-template-columns: 35% 63%;
  grid-template-rows: 48% 48%;
  grid-gap: 1rem;
}
.Nav{
  width: 90%;
  margin:  0 auto;
}

#Mine > div{
  border: 1px solid #bdc3c7;
}
.upload{
  width: 100%;
  height: 40vh;
  grid-area: upload;
}

.usermassage{
  width: 100%;
  height: 40vh;
  align-self: center;
  grid-area: usermassage;
  display: flex;
}
.usermassage > div{
  height: 50%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3,33%);
  align-items: center;
  align-self: center;
  margin: 5px;
}
.usermassage > div > div{
  border-bottom: 1px solid #bdc3c7;
}
.cententnav{
  width: 100%;
  height: 42vh;
  grid-area: cententnav;
  justify-self: center;
  align-self: center;
}
.cententnav > div{
  height: 50%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3,33%);
  grid-template-columns: 100%;
  align-items: center;
}
.cententnav > div > div{
  margin: 5px;
  border-bottom: 1px solid #bdc3c7;
}
.cententnav > div >div.router-link-active{
  color: #ff9f43;
}
.centent{
  width: 100%;
  height: 42vh;
  grid-area: centent;
  justify-self: center;
  align-self: center;
}
</style>