<template>
    <div class="album" :class="{'small':isSmall,'big':isBig}">
        <img :src="icon" alt="">
        <div class="title">{{title}}</div>
    </div>
</template>
<script>
    export default{
        props: ['icon','title','isSmall','isBig'],
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    .album{
        position: relative;
    }
    .small{
        width: 203px;
        height: 140px;
    }
    .big{
        width: 420px;
        height: 230px;
    }
    .album>img{
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
    .title{
        position:absolute;
        bottom:0;
        left: 0;
        right: 0;
        line-height:36px;
        text-align: center;
        background-color: rgba(43,48,53,.565);
        color:#fff;
        /* 溢出部分...  */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding:0 10px;
        font-size: 12px;

    }
</style>