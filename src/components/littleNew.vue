<template>
    <div class="L_new">
        <img :src="icon" alt="">
        <div class="right">
            <p class="title">{{title}}</p>
            <div class="bottom">
                <div class="r_left">
                    <span class="time">{{date}}</span>
                    <span class="author">{{author}}</span>
                </div>
                <div class="look"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['icon','title','date','author']
}
</script>
<style scoped>
    .L_new{
        width: 420px;
        height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .L_new>img{
        width: 112px;
        height: 100%;
    }
    .right{
        width: 288px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .bottom{
        width: 100%;
        height: 17px;
        display: flex;
        justify-content: space-between;
    }
    .title{
        text-align: left;
    }


</style>