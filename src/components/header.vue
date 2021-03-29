<template>
    <div class="websiteHeader">
        <div class="websiteHeaderContent">
            <div>
                <p><img src="../assets/headerImage/touxiang.png" alt="touxiang"></p>
                <p>小懵罗同学</p>
            </div>
            <div>
                <ul>
                    <li v-for="(item,index) in headerArray" :key="item+index">
                        <router-link :to="item.href" :class="item.class">{{item.label}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            headerArray:[
                {
                    value:'',
                    label:'站点介绍',
                    class:'selected',
                    href:'/'
                },
                {
                    value:'',
                    label:'学习计划',
                    class:'',
                    href:'/studyPlan'
                },
                {
                    value:'',
                    label:'学习笔记',
                    class:'',
                    href:'/studyNote'
                },
                {
                    value:'',
                    label:'书影心得',
                    class:'',
                    href:'/bookReport'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .websiteHeader{
        width: 100%;
        margin: 0 auto;
        background: #0fa6fc;
        min-width: 1360px;
    }
    .websiteHeaderContent{
        width: 100%;
        height: 88px;
        line-height: 88px;
        display: flex;
        justify-content: space-between;
    }
    .websiteHeaderContent div:first-child{
        width: 30%;
        height: 88px;
        line-height: 88px;
        display: flex;
        justify-content:start;
        margin-left: 30px;
        color: #ffff;
    }
    .websiteHeaderContent div:first-child p{
        display: inline-block;
    }
    .websiteHeaderContent div:first-child p:first-child{
        margin-right: 10px;
    }
    .websiteHeaderContent div:first-child p:first-child img{
        width: 52px;
        height: 52px;
        vertical-align: middle;
    }
    .websiteHeaderContent div:last-child{
        width: 70%;
        height: 88px;
        line-height: 88px;

    }
    .websiteHeaderContent div:last-child ul{
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content:flex-end;
    }
    .websiteHeaderContent div:last-child ul li{
        list-style: none;
        margin-right: 30px;
        cursor: pointer;
    }
    .websiteHeaderContent div:last-child ul li a{
        color: #ffff;
        text-decoration: none;
    }
    .websiteHeaderContent div:last-child ul li a:hover{
        color: #f9eb08;
    }
    .selected{
        color: #f9eb08 !important;
    }
</style>