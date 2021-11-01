<template>
  <div>
    <div class="trContent">
      <div class="tdContent" @click="toggle" >
        <p :style="{paddingLeft: (level-1)+'em'}">
          <label>{{model.title}}</label>      
          <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </p>
      </div>
      <div class="tdContent name">{{model.contactName}}</div>
      <div class="tdContent industry">{{model.industry}}</div>
      <div class="tdContent contact">{{model.contact}}</div>
      <div class="tdContent operation">
        <button><Icon type="ios-search" /></button>
        <button><Icon type="md-create" /></button>
        <!-- 删除 -->
        <button @click="append(model)"><Icon type="ios-add" /></button>
        <Poptip
          confirm
          title="确认删除吗？"
          @on-ok="ok(model)"
          @on-cancel="cancel"
          placement="bottom-end">
          <Button><Icon type="ios-remove" /></Button>
        </Poptip>
        <!-- <button @click="remove(allData, model, model)"><Icon type="ios-remove" /></button> -->
      </div>
  </div>
    <div v-show="open" v-if="isFolder">
      <tree-node class="item" v-for="model in model.children" 
        :model="model" :key="model.title+model.nowTime"
        :level="level + 1"></tree-node>
    </div>
  </div>
</template>

<script>
export default {
  name: "tree-node",
  props: {
    model: Object,
    allData: Array,
    level: {
      type: Number,
      default: 1
    }
  },
  data: function() {
    return {
      open: true
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    // 展开/收起
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    // 新增节点
    append:function(data){
      const children = data.children || [];
      const nowTime = new Date().getTime();
      children.push({
          title: '请编辑新增部门',
          nowTime:nowTime,
          expand: true
      });
      this.$set(data, 'children', children);
    },
    // 确认删除
    ok (model) {
        this.removeNode( model)
    },
    // 取消删除
    cancel () {
        this.$Message.info('删除取消！');
    },
    // 删除节点操作
    removeNode:function(model){
      console.log("model:",model)
      let _this = this;
      if(_this.$parent.model){
        _this.$parent.model.children.forEach((item,index) => {
          if(item.contactName===model.contactName){
            _this.$parent.model.children.splice(index,1)
          }
        });
      }
      this.$Message.info('删除成功！');
    }
  }
};
</script>
<style scoped>
  .trContent{
    width: 100%;
    display: flex;
  }
  .tdContent{
    width: 20%;
    text-align: center;
    border: 1px solid #ccc;
  }
  .tdContent button{
    padding: 0 5px;
    font-size: 12px;
    border-radius: 4px;
    background: transparent;
    border: 1px solid#ccc;
  }
</style>