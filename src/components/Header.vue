<template>
  <div class="top">
    <div class="head">
      <div class="left">
        <img src="https://www.zg.news/images/logo.png" alt=""  >
      </div>
      <div class="right">
        <span>
          <router-link to="/" @click.native="addclass" :class="{a_clicked:isActive}">新闻</router-link>
        </span>
        <span>
          <router-link to="/new-flash"  v-on:click.native="addclass1" :class="{a_clicked:isBctive}">快讯</router-link>
        </span>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
    return{
      isActive:true,
      isBctive:false,

    }
  },
  methods:{
    addclass:function(){
       this.isActive=true;
       this.isBctive=false;
    },
    addclass1:function(){
       this.isActive=false;
       this.isBctive=true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
    width: 100%;
    border-bottom:1px solid #e6e6e6;
  }
  .head{
    width:1400px;
    height: 60px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
  }
  .left>img{
    margin-top: 10px;
    line-height:60px;
    width: 150px;
  }
  .right{
    width: 150px;
    display:flex;
    justify-content: space-between;
  }
  .right>span{
    flex:1 1 0;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    /* color: #909399;字体颜色没有继承 */
  }
  .right>span>a{
    color: #909399;
    display: block;
    line-height:60px;
  }
  .a_clicked{
    color: #000!important;
    border-bottom: 2px solid #409eff;
  }

</style>
