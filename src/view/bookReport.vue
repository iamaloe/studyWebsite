<template>
    <div class="bookReportMain">
        <h1>iview tree组件</h1>
        <ul class="tableTitle">
            <li>名称</li>
            <li>联系人</li>
            <li>行业</li>
            <li>联系方式</li>
            <li>操作</li>
        </ul>
        <div class="comTree">
            <!-- <vTree></vTree> -->
            <pTree></pTree>
        </div>
    </div>
</template>
<script>
    import vTree from '../components/tree';
    import pTree from '../components/packageTree/index'
    export default{
        name: 'bookReport',
        data(){
            return{
                treeLists:[]
            }
        },
        mounted(){},
        components:{
            vTree,
            pTree
        },
        methods:{}
    }
</script>
<style>
    .bookReportMain{
        padding: 10px;
    }
    .tableTitle{
        width: 100%;
        display: flex;
        /* margin: 0 5px; */
    }
    .tableTitle li{
        width: 20%;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
    .tableTitle li:first-child{
        text-align: left !important;
    }
    /* .comTree{ */
        /* margin: 0 5px; */
    /* } */
</style>