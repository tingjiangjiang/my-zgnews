<template>
  <div class="new">
    <div class="contant">
      <div class="main">
        <div class="recomment">
          <div class="header">
            <div class="title">推荐资讯</div>
            <div class="more">更多...</div>
          </div>
          <div class="content">
            <div class="carousel-wrapper">
              <el-carousel height="300px">
                <el-carousel-item v-for="(item,index) in lunbo" :key="index">
                  <img :src="item" alt="" style="width:100%;height:100%">
                  <!-- <div>{{index}}</div> -->
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="side">
              <my-album v-bind="res_item" :isSmall='true'></my-album>
              <my-album v-bind="res_item1" :isSmall='true'></my-album>
            </div>
          </div>
        </div>
        <div class="row2">
          <div class="left">
            <div class="header">
              <div class="title">推荐资讯</div>
              <div class="more">更多...</div>
            </div>
            <my-album v-bind="res_item" :isBig='true'></my-album>
          </div>
          <div class="right">
            <div class="header">
              <div class="title">推荐资讯</div>
              <div class="more">更多...</div>
            </div>
            <my-album v-bind="res_item2" :isBig='true'></my-album>
          </div>
        </div>
        <div class="row3">
          <div class="header">
            <div class="title">推荐资讯</div>
            <div class="more">更多...</div>
          </div>
          <div class="content">
            <div class="left">
              <my-album v-bind="res_item3" :isBig='true'></my-album>
            </div>
            <div class="right">
              <my-littleNew v-bind="res_item3"></my-littleNew>
              <my-littleNew v-bind="res_item3"></my-littleNew>
              <my-littleNew v-bind="res_item3"></my-littleNew>
            </div>
          </div>
        </div>
        <div class="row4">
          <div class="left">
            <div class="header">
            <div class="title">推荐资讯</div>
            <div class="more">更多...</div>
          </div>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          </div>
          <div class="right">
            <div class="header">
            <div class="title">推荐资讯</div>
            <div class="more">更多...</div>
          </div>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          <my-littleNew v-bind="res_item3"></my-littleNew>
          </div>
        </div>
      </div>
      <div class="said">
        <div class="top">
          <my-sideTable v-for="(item,index) in res" :key="index" :array="item"></my-sideTable>
        </div>
        <div class="bottom">
          <div class="buttonWrapper">
            <button>Start</button>
            <button>End</button>
          </div>
        </div>
      </div>
    </div>
    <div v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="10">
              <img src="../assets/logo.png" alt="">
          </div>
<h1>Random User</h1>
    <div class="person" v-for="(person, index) in p" :key="index">
      <div class="left">
        <img :src="person.icon" alt="">
      </div>
      <div class="right">
        <p>{{ person.title}} </p>
        <ul>
          
          <div class="text-capitalize">
            <strong>Location:</strong> {{ person.author}}
          </div>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
  var count = 0;

// @ is an alias to /src
// import Header from '@/components/Header.vue/'
import store from '@/store/index'
import {mapState,mapMutations,mapGetters} from 'vuex'
import axios from 'axios'
import album from '@/components/album'
import littleNew from '@/components/littleNew'
import sideTable from '@/components/sideTable'



export default {
  components:{
    'my-album':album,
    'my-littleNew':littleNew,
    'my-sideTable':sideTable
  },
  data(){
    return{
      lunbo:[],
      res:[],
      res_item:{
        icon:'',
        title:''
      },
      res_item1:{
        icon:'',
        title:''
      },
      res_item2:{
        icon:'',
        title:''
      },
      res_item3:{
        icon:'',
        title:''
      },
      busy:false,
      p:[]
    }
  },
  store,
  computed:{
    // ...mapState(['count']),
    // ...mapGetters(['count'])
  },//computed属性可以在输出前，对data中的属性值进行改变
  created(){

    this.$http.get("/posts").then(res => {
      let arr=[]
      let new_indexs = res.data.posts;
      this.res = new_indexs;
      this.res_item = this.res[0];
      this.res_item1 = this.res[1];
      this.res_item2 = this.res[2];
      this.res_item3 = this.res[3];
      // console.log(new_indexs instanceof Array);
      let arr_indexs = new_indexs.slice(0,5);
      arr_indexs.forEach(function(item){
        arr.push(item.icon)
      })
      this.lunbo = arr;
      
    });
  },
  watch:{
    p:function(newtr,old){
      console.log(newtr,old)
    }
  },
  methods: {
      // ...mapMutations([
      // 'add','reduce'
    // ])
    loadMore:function(){
      // console.log("触发事件了吗？")
      this.busy = true;
       this.$http.get('/posts').then(response => {
            this.p.push(response.data.posts[0])
      })
            this.busy = false;

       }
    
  }
}
  
</script>
<style scoped>
/* 大概布局 */
  .contant{
    width:1200px;
    margin:0 auto 50px;
    display:flex;
    justify-content: space-between;
  }
  .main{
    width:72%;
    margin-top:20px;  
    min-height:800px;
  }
  .said{
    width:25%;
    margin-top:60px;
    background-color: pink;
    
  }
  .header{
    height: 40px;
    display:flex;
    justify-content: space-between;
  }
  .main>.recomment>.content{
    height: 300px;
    display: flex;
    justify-content: space-between;
  }
  .recomment>.content>div{
    width: 420px;
    /* background-color: yellow; */
  }
  .main>.row2,.main>.row3{
    height: 270px;
    margin-top:20px;
  }
  .main>.row4{
    height: 477px;
    margin-top:20px;
  }
  .main>div{
    /* background-color: lightblue; */
  }
  /* 细致布局 */
 .header>.title{
    color: rgb(62, 147, 255);
    font-weight: 700;
    line-height: 40px;
  }
  .header>.more{
    cursor: pointer;
    font-size: 12px;
    line-height: 40px;
  }
  .recomment>.content>.side{
    display:flex;
    justify-content: space-between;
  }
  .row2,.row4{
    display: flex;
    justify-content: space-between;
  }
  .row3>.content{
    height: 230px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .row3>.content>.right{
    height: 230px;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .row4{
    width: 864px;
    height: 477px;
  }
  .row4>.left,.row4>.right{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .said>.top{
    border:1px solid #ccc;
  }

  /* 测试 */
.person {
  background: #ccc;
  border-radius: 2px;
  width: 20%;
  margin: 0 auto 15px auto;
  padding: 15px;
}
  img {
    width: 100%;
    height: auto;
    border-radius: 2px;
  }

  p:first-child {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 900;
  }

  .text-capitalize {
    text-transform: capitalize;
  }

  /* 初玩sass */
  /* Reset */

/* First button */

.buttonWrapper button:first-child {
    padding: 10px 20px;
    font-size: 24px;
    border-radius: 4px;
    color: white;
    border: none;
    margin: 40px;
    background: #55acee;
    box-shadow: 0px 5px 0px 0px black;
}

/* First button hover */

.buttonWrapper button:first-child:hover {
    animation: horizontalShake .5s; 
    
}

/* Last button */

.buttonWrapper button:last-child {
    padding: 10px 20px;
    font-size: 24px;
    border-radius: 4px;
    color: white;
    border: none;
    margin: 40px;
    background: #2ECC71;
    box-shadow: 0px 5px 0px 0px black;
}

/* Last button hover */

.buttonWrapper button:last-child:hover {
    animation: verticalShake .5s; 
}

/* Shake horizontally */

@keyframes horizontalShake {
    0% {
        transform: translateX(10%);
    }
    25% {
        transform: translateX(-10%);
    }
    75% {
        transform: translateX(10%);
    }
    100% {
        transform: translateX(0%);
    }
}

/* Shake Vertically */

@keyframes verticalShake {
    0% {
        transform: translateY(10%);
    }
    25% {
        transform: translateY(-10%);
    }
    75% {
        transform: translateY(10%);
    }
    100% {
        transform: translateY(0%);
    }
}



</style>
