<template>
  <div class="kkb-tree">
    <TreeNode v-for="item in data" :key="item.title" :allData="data" :model="item"></TreeNode>
  </div>
</template>

<script>
import TreeNode from "@/components/packageTree/TreeNode.vue";
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    TreeNode
  }
};
</script>

<style scoped>
.kkb-tree {
  text-align: left;
}
</style>