<template>
  <div>
      <div class="tab" v-for="(item,index) in list" :key="index" @click="navClick(index)">
       <div class="tab-title">{{item.title}}</div>
       <div class="tab-content" v-for="(child,value) in item.content" :key="value" :class="{'active':currentIndex===index}" >
           <p>{{child}}</p>
       </div>
   </div>
  </div>
</template>

<script>
export default {
    name: 'collect',
     data() {
        return {
            list: [
                {
                    title: '一级标题',
                    content: ['二级内容', '二级内容', '二级内容', '二级内容', '二级内容']
                },
                {
                    title: '一级标题',
                    content: ['二级内容', '二级内容', '二级内容', '二级内容', '二级内容']
                },
                {
                    title: '一级标题',
                    content: ['二级内容', '二级内容', '二级内容', '二级内容', '二级内容']
                },
                {
                    title: '一级标题',
                    content: ['二级内容', '二级内容', '二级内容', '二级内容', '二级内容']
                },
                {
                    title: '一级标题',
                    content: ['二级内容', '二级内容', '二级内容', '二级内容', '二级内容']
                }
            ],
            currentIndex: null
        }
    },
    methods: {
        navClick(index) {
            if (this.currentIndex == index) {
                this.currentIndex = null;
                console.log(this.currentIndex);
            } else {
                this.currentIndex = index;
                console.log(this.currentIndex);
            }

        }
    }
}
</script>

<style>
.tab{
    font-size: 12px;
}
.tab-title{
    background-color: #999;
    font-size: 16px;
    color: #666;
    padding: 12px 16px;
    border-bottom: 1px solid #888;
    cursor: pointer;
}
.tab-content{
    padding: 12px 20px;
    background-color: #fff;
    line-height: 18px;
    display: none;
    transition: 0.3s;
}
.tab-content.active{
    display: block;
}
</style>