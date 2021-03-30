<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <vHeader></vHeader>
    <router-view/>
  </div>
</template>

<script>
import vHeader from "./components/header"
export default {
  name: 'App',
  mounted(){
    let width=$("body").width();
      if(width>=1200){
        let fontsize=width/1920*40;//fontsize为当前屏幕的基数字体，相对于设计稿计算得到的。
        $("html").css("font-size",`${fontsize}px`)
      }//当加载页面的时候设置生效
      window.onresize = () => {//当页面尺寸改变的时候生效
        return (() => {
          let width=$("body").width();
          if(width>=1200){
            let fontsize=width/1920*40;
            $("html").css("font-size",`${fontsize}px`)
          }
        })()
      }
  },
  components:{
    vHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
  text-align: left;
}
li{
  list-style: none;
}
</style>
