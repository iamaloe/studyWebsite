<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in homeHtml" :key="index">
        <div class="htmlCode" v-html="item">{{item}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      homeContent:[
        {
          src:"../../static/headerImage/mengxiang.png",
          title:"开发", 
          desc:"一个前端开发小菜鸟，喜欢翻看各种技术博客，收集各种学习资料。<br/>接触过小程序、公众号、手机App、门户网站和平台系统。<br/>前端三大框架（Vue、react、angular）都有实战开发经验。"
        
        },
        {
          src:"../../static/headerImage/aihao.png",
          title:"傻乐",
          desc:"一个喜欢唯美动画片和喜剧的颜汪，最喜欢看的是《火鸡总动员》。<br/>天生的乐观派，外向的白羊座，偶尔颓废的小杠精。<br/>怕黑怕静的孤独患者。"
        },
        {
          src:"../../static/headerImage/shenghuo.png",
          title:"生活",
          desc:"一个喜欢胡思乱想的胖宅，喜欢诗词歌赋，最爱舒婷的《致橡树》。<br/>够辣就好吃，奶茶是最爱，最近喜欢上了射箭。<br/>最大的快乐是边喝奶茶边撸码。"
        }
      ],
      homeHtml:[]
    }
  },
  mounted(){
    this.dataRefresh()
  },
  methods:{
    dataRefresh(){
      for(let i=0;i<this.homeContent.length;i++){
        let homeHtmlStr = ""
        if((i+1)%2==1){
          homeHtmlStr += '<div class="descImg" style="margin-right:20px"><img src="'+ this.homeContent[i].src+'" alt="'+this.homeContent[i].title+'"></div>'
          homeHtmlStr += '<div class="desc" style="margin-top:52px;"><h2>'+this.homeContent[i].title+'</h2><p style="line-height:36px">'
          homeHtmlStr += this.homeContent[i].desc+'</p></div>'
        }else{
          homeHtmlStr += '<div class="desc" style="margin-right:20px;margin-top:52px;"><h2>'+this.homeContent[i].title+'</h2><p style="line-height:36px">'
          homeHtmlStr += this.homeContent[i].desc+'</p></div>'
          homeHtmlStr += '<div class="descImg"><img src="'+ this.homeContent[i].src+'" alt="'+this.homeContent[i].title+'"></div>'
        }
        this.homeHtml.push(homeHtmlStr)
      }
      console.log("homeHtml:",this.homeHtml)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 62%;
  min-width: 1200px;
  margin: 0 auto;
}
.htmlCode{
  width: 100%;
  height: 260px;
  display: flex;
  justify-content:center;
  margin-top: 20px;
}
.desc{
  text-align: left;
  margin-top: 30px;
}
</style>
