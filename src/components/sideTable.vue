<template>
    
        <div class="tr" >
            <img :src="array.icon" alt="">
            <div>{{array.author}}</div>
            <div class="second">{{array.title}}</div>
    </div>
</template>
<script>

export default {
    props:{array:Object}
}
</script>
<style scoped>
   
    .tr{
        margin: 0 15px;
        border-bottom: 1px solid #ccc;
        display:flex;
        justify-content: start;
        align-items: center;
        height: 70px;
        text-align: center;
    }
    .tr>img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    .tr>div{
        padding-left: 15px;
    }
    .tr>.second{
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>