<template>
    <div class="studyPlan">
        <div class="studyPlanCode">
            <ul>
                <li v-for="(item,index) in planLists" :key="item.title+index">
                    <header @click="showTask(item.ifShowLists,index)" :class="item.ifShowLists?'showBorder':'hideBorder'"><p>{{item.title}}</p><p><img :src="item.ifShowLists===true?'.../../static/studyPlan/up.png':'.../../static/studyPlan/down.png'" alt="up"></p></header>
                    <div v-if="item.ifShowLists">
                        <p v-for="(itemTask,ind) in item.lists" :key="ind">{{itemTask}}
                            <!-- <div>{{itemTask}}</div> -->
                            <!-- <div>{{itemTask.time}}</div> -->
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Plan',
        data(){
            return{
                planLists:[
                    {
                        title:"个站计划(20210322--20210430)",
                        ifShowLists:true,
                        lists:[
                            "20210326:github仓库创建",
                            "20210327:github仓库分支与vscode连接",
                            "20210328:项目搭建;站点介绍psd设计",
                            "20210329:首页编写",
                            "20210330:头部状态",
                            "20210331:设置全局自适应字体;学习计划psd设计",
                            "20210401:学习计划页面编写"
                            // {"time":"20210326","content":"github仓库创建"},
                            // {"time":"20210327","content":"github仓库分支与vscode连接"},
                            // {"time":"20210328","content":"项目搭建;站点介绍psd设计"},
                            // {"time":"20210329","content":"首页编写"},
                            // {"time":"20210330","content":"头部状态"},
                            // {"time":"20210331","content":"设置全局自适应字体;学习计划psd设计"},
                            // {"time":"20210401","content":"学习计划页面编写"}
                        ]
                    },
                    // {
                    //     title:"个站计划(20210322--20210430)",
                    //     ifShowLists:false,
                    //     lists:[
                    //         "20210326:github仓库创建",
                    //         "20210327:github仓库分支与vscode连接",
                    //         "20210328:项目搭建;站点介绍psd设计",
                    //         "20210329:首页编写",
                    //         "20210330:头部状态",
                    //         "20210331:设置全局自适应字体;学习计划psd设计",
                    //         "20210401:学习计划页面编写"
                    //     ]
                    // }
                ]
            }
        },
        mounted(){},
        methods:{
            showTask(ifShow,index){
                console.log("ifShow:",ifShow)
                console.log("index:",index)
                for(let i=0;i<this.planLists.length;i++){
                    debugger;
                    if(index==i){
                        this.planLists[i].ifShowLists = !ifShow
                    }else{
                        this.planLists[i].ifShowLists = false
                    }
                }
                console.log("changeData:",this.planLists)
            }
        }
    }
</script>
<style scoped>
    .studyPlan{
        width: 62%;
        min-width: 1200px;
        margin: 0 auto;
    }
    .studyPlanCode{
        width: 100%;
    }
    .studyPlanCode ul{
        width: 100%;
    }
    .studyPlanCode ul li{
        background: #eee;
        padding: 10px;
        border-radius: 5px;
        margin-top: 20px;
    }
    .studyPlanCode ul li header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        cursor: pointer;
        color: #d2a3f6;
    }
    .studyPlanCode ul li header.showBorder{
        border-bottom: 1px solid #fff;
        padding: 10px 0;
        font-weight: bold;
    }
    .studyPlanCode ul li header.hideBorder{
        border-bottom: 1px solid #eee;
        padding: 0 0;
    }
    .studyPlanCode ul li header img{
        width: 25px;
    }
    .studyPlanCode ul li div{
        width: 98%;
        margin-left: 2%;
    }
    .studyPlanCode ul li div p{
        padding: 15px 0;
        border-bottom: 1px solid #fff;
        border-bottom-style: dotted;
    }
</style>