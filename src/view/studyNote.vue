<template>
    <div class="studyNote">
        <div class="threeMenu">
            <div v-for="(firstMenu,index) in menuList" :key="index+firstMenu.firstValue" class="firstMenu">
                <p :class="{firstMenuName:true,firstMenuNameActive:firstMenu.isShowSecondMenu}" @click="clickFirst(firstMenu)">{{firstMenu.firstMenu}}</p>
                <div class="secondMenuBox" v-show="clickHidden">
                    <ul class="secondMenu" v-if="firstMenu.isShowSecondMenu">
                        <li v-for="(secondMenu,ind) in firstMenu.secondMenu" :key="ind+secondMenu.secordValue" class="secondMenuList">
                            <p :class="{secondMenuName:true,secondMenuNameActive:secondMenu.isShowThirdMenu}" @click="clickSecond(firstMenu,secondMenu)">{{secondMenu.secordMenuName}}</p>
                            <ul class="thirdMenu" v-if="secondMenu.isShowThirdMenu">
                                <li v-for="(thirdMenu,i) in secondMenu.thirdMenu" :key="i+thirdMenu.value" class="thirdMenuName">
                                    <p :class="{thirdMenuName:true,thirdMenuNameActive:thirdMenu.active}" @click="clickThird(firstMenu,secondMenu,thirdMenu)">{{thirdMenu.label}}</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="getValueHtml" v-html="getAllData"></div>
    </div>
</template>
<script>
export default{
    name:"Note",
    data(){
        return {
            menuList:[
                {
                    firstMenu:"数据服务",
                    firstValue:'1_01',
                    isShowSecondMenu:false,
                    secondMenu:[
                        {
                            secordMenuName:"营销主题",
                            secordValue:"2_01",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_01",label:"活动",active:false},
                                {value:"3_02",label:"推荐",active:false},
                                {value:"3_03",label:"搜索",active:false},
                                {value:"3_04",label:"客户经营",active:false}
                            ]
                        },
                        {
                            secordMenuName:"产品主题",
                            secordValue:"2_02",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_05",label:"中收",active:false},
                                {value:"3_06",label:"理财",active:false},
                                {value:"3_07",label:"消金",active:false},
                                {value:"3_08",label:"卡产品",active:false},
                                {value:"3_09",label:"支付",active:false}
                            ]
                        },
                        {
                            secordMenuName:"客户主题",
                            secordValue:"2_03",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_10",label:"场景",active:false},
                                {value:"3_11",label:"行为",active:false},
                                {value:"3_12",label:"属性",active:false}
                            ]
                        },
                        {
                            secordMenuName:"风险主题",
                            secordValue:"2_04",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_13",label:"贷前",active:false},
                                {value:"3_14",label:"贷中",active:false},
                                {value:"3_15",label:"贷后",active:false}
                            ]
                        },
                        {
                            secordMenuName:"运营主题",
                            secordValue:"2_05",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_16",label:"财务",active:false},
                                {value:"3_17",label:"账务",active:false},
                                {value:"3_18",label:"商户",active:false},
                                {value:"3_18",label:"账单",active:false}
                            ]
                        },
                        {
                            secordMenuName:"渠道主题",
                            secordValue:"2_06",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_20",label:"营销通",active:false},
                                {value:"3_21",label:"公众平台",active:false},
                                {value:"3_22",label:"动卡",active:false},
                                {value:"3_23",label:"短信平台",active:false}
                            ]
                        }
                    ]
                },
                {
                    firstMenu:"AI服务",
                    firstValue:'1_02',
                    isShowSecondMenu:false,
                    // blodFont:false,
                    secondMenu:[
                        {
                            secordMenuName:"二级菜单",
                            secordValue:"2_07",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_24",label:"AI服务11",active:false},
                                {value:"3_25",label:"AI服务22",active:false}
                            ]
                        },
                        {
                            secordMenuName:"二级菜单",
                            secordValue:"2_08",
                            isShowThirdMenu:false,
                            thirdMenu:[
                                {value:"3_27",label:"AI服务33",active:false},
                                {value:"3_28",label:"AI服务44",active:false},
                                {value:"3_29",label:"AI服务55",active:false}
                            ]
                        }
                    ]
                }
            ],
            getAllData:"",
            clickHidden:true        
        }
    },
    mounted(){
        document.addEventListener('click',e=>{
            let className = e.target.className;
            console.log("className",className)
            if(className.indexOf("firstMenuName")===-1&&className.indexOf("secondMenu")===-1){
                this.$data.clickHidden = false
            }else{
                this.$data.clickHidden = true
            }
            for(let w=0;w<this.$data.menuList.length;w++){
                
            }
        })
    },
    methods:{
        clickFirst(item){
            console.log("item:",item)
            for(let i=0;i<this.$data.menuList.length;i++){
                if(this.$data.menuList[i].firstValue===item.firstValue){
                    this.$data.menuList[i].isShowSecondMenu = true
                    let getSelectArr = this.$data.menuList[i].secondMenu.filter(item=>{
                        return item.isShowThirdMenu
                    })
                    if(getSelectArr.length<1){
                        for(let s=0;s<this.$data.menuList[i].secondMenu.length;s++){
                            if(s==0){
                                this.$data.menuList[i].secondMenu[s].isShowThirdMenu = true
                            }else{
                                this.$data.menuList[i].secondMenu[s].isShowThirdMenu = false
                            }
                        }
                    }else{
                        debugger;
                        for(let s=0;s<this.$data.menuList[i].secondMenu.length;s++){
                            if(this.$data.menuList[i].secondMenu[s].secordValue===getSelectArr[0].secordValue){
                                this.$data.menuList[i].secondMenu[s].isShowThirdMenu = true
                            }else{
                                this.$data.menuList[i].secondMenu[s].isShowThirdMenu = false
                            }
                        }
                    }
                }else{
                    this.$data.menuList[i].isShowSecondMenu = false
                    for(let t=0;t<this.$data.menuList[i].secondMenu.length;t++){
                        this.$data.menuList[i].secondMenu[t].isShowThirdMenu = false
                    }
                }
            }
            console.log("Click_Data",this.$data.menuList)
        },
        clickSecond(itemParent,item){
            console.log("openSecond",item)
            for(let i=0;i<this.$data.menuList.length;i++){
                if(this.$data.menuList[i].firstValue===itemParent.firstValue){
                    this.$data.menuList[i].isShowSecondMenu = true
                    for(let j=0;j<this.$data.menuList[i].secondMenu.length;j++){
                        if(this.$data.menuList[i].secondMenu[j].secordValue===item.secordValue){
                            this.$data.menuList[i].secondMenu[j].isShowThirdMenu = true
                        }else{
                            this.$data.menuList[i].secondMenu[j].isShowThirdMenu = false
                        }
                    }
                }else{
                    this.$data.menuList[i].isShowSecondMenu = false
                }
            }
        },
        clickThird(firstItem,secondMenu,thirdItem){
            for(let f=0;f<this.$data.menuList.length;f++){
                if(this.$data.menuList[f].firstValue===firstItem.firstValue){
                    this.$data.menuList[f].isShowSecondMenu = true;
                    for(let t=0;t<this.$data.menuList[f].secondMenu.length;t++){
                        if(this.$data.menuList[f].secondMenu[t].secordValue === secondMenu.secordValue){
                            for(let d = 0;d<this.$data.menuList[f].secondMenu[t].thirdMenu.length;d++){
                                if(this.$data.menuList[f].secondMenu[t].thirdMenu[d].value===thirdItem.value){
                                    this.$data.menuList[f].secondMenu[t].thirdMenu[d].active = true
                                }else{
                                    this.$data.menuList[f].secondMenu[t].thirdMenu[d].active = false
                                }
                            }
                        }else{
                            for(let d = 0;d<this.$data.menuList[f].secondMenu[t].thirdMenu.length;d++){
                                this.$data.menuList[f].secondMenu[t].thirdMenu[d].active = false
                            }
                        }
                    }
                }else{
                    this.$data.menuList[f].isShowSecondMenu = false;
                    for(let t=0;t<this.$data.menuList[f].secondMenu.length;t++){
                        this.$data.menuList[f].secondMenu[t].isShowThirdMenu = false
                        for(let s=0;s<this.$data.menuList[f].secondMenu[t].length;s++){
                            for(let h=0;h<this.$data.menuList[f].secondMenu[t].thirdMenu.length;h++){
                                this.$data.menuList[f].secondMenu[t].thirdMenu[h].active = false
                            }
                        }
                    }
                }
            }
            this.$data.getAllData = "";
            this.$data.getAllData += '<div class="getDataHtml"><p>一级菜单text：<span>'+firstItem.firstMenu+'</span>;一级菜单value：<span>'+firstItem.firstValue+'</span></p>';
            this.$data.getAllData += '<p>二级菜单text：<span>'+secondMenu.secordMenuName+'</span>;二级菜单value：<span>'+secondMenu.secordValue+'</span></p>';
            this.$data.getAllData += '<p>三级菜单text：<span>'+thirdItem.label+'</span>;三级菜单value：<span>'+thirdItem.value+'</span></p></div>';
        }
    }
}
</script>
<style>
    .studyNote{
        width: 100%;
    }
    .threeMenu{
        width: 100%;
        height: 52px;
        line-height: 52px;
        display: flex;
        justify-content: flex-start;
        background: #eee;
    }
    .firstMenu{
        margin: 0 10px;
        cursor: pointer;
        position: relative;
    }
    .firstMenuName:hover,.firstMenuNameActive{
        font-weight: bold;
    }
    .secondMenuBox{
        position: absolute;
    }
    .secondMenu{
        width: 400px;
        background: #e5e5e5;
        padding: 5px 10px;
        border-radius: 0 0 5px 5px;
        position: relative;
    }
    .secondMenuName:hover,.secondMenuNameActive{
        color: red;
    }
    .secondMenuList{
        width: 100px;
        border-bottom: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
    }
    .thirdMenu{
        position: absolute;
        top: 0;
        left: 120px;
        width: 280px;
        display: flex;
        justify-content: flex-start;
        flex-wrap:wrap;
    }
    .thirdMenu li{
        margin-right: 10px;
    }
    .thirdMenuName:hover,.thirdMenuNameActive{
        color: red;
    }
    .getValueHtml{
        width: 600px;
        margin: 0 auto;
        margin-top: 300px;
    }
    .getDataHtml span{
        color: red;
    }
</style>