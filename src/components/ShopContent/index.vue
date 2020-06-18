<template>
    <div id="body">
        <ul>
            <li v-for="(item,value) in book_title" :key="value">
                <img src="" alt="">
                <p>{{item}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'ShopContent',
    data(){
        return {
            booklist : [],
            book_id : [],
            book_title : [],
            number : 0,
        }
    },
    methods : {
        addModel(){
            this.$axios.get('http://106.52.187.20:3000/books/bookList?page=0&limit=10').then((response) => {
                console.log(response.data);
                this.booklist = response.data.data;
                for(let x=0;x<=this.booklist.length;x++){
                    this.book_id[x] = this.booklist[x].book_id;
                    this.book_title[x] = this.booklist[x].book_title;
                    console.log(this.book_id);
                    console.log(this.book_title);
                }
                console.log(this.book_id);
                console.log(this.book_title);
            }).catch((error) => {
                console.log(error);
            })
        },
    },
    created(){
        this.addModel();
    }
}
</script>

<style scope>
#body{}
#body ul{ height: 100vh; display: grid; grid-template-columns: repeat(auto-fill,31.333333333333%); grid-template-rows: repeat(4,25%); grid-gap: 0 3%; padding: 3%;}
#body img{ height: 80%; width: 100%; background: blue;}
#body p{ font-size: 12px; height: 20%; width: 100%; display: block; text-align: center; line-height: 30px;}
</style>