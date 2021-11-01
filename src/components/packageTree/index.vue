<template>
  <Tree :data="treeData"></Tree>
</template>

<script>
import Tree from "@/components/packageTree/Tree.vue";
export default {
  data() {
    return {
      treeData: [
        {
          title: "root",
          contactName:'张三14',
          industry:'运维14',
          contact:'14*********',
          children: [
            {
              title: "部门1.1",
              contactName:'张三13',
              industry:'运维13',
              contact:'13*********',
            },
            {
              title: "部门1.2",
              contactName:'张三12',
              industry:'运维12',
              contact:'12*********',
              children: [
                {
                  title: "部门2.4",
                  contactName:'张三11',
                  industry:'运维11',
                  contact:'11*********',
                },
                {
                  title: "部门2.5",
                  contactName:'张三10',
                  industry:'运维10',
                  contact:'10*********',
                }
              ]
            },
            {
              title: "部门1.3",
              contactName:'张三9',
              industry:'运维9',
              contact:'9**********',
              children: [
                {
                  title: "部门2.1",
                  contactName:'张三8',
                  industry:'运维8',
                  contact:'8**********',
                  expand: true,
                  children: [
                    {
                      title: "部门3.1",
                      contactName:'张三7',
                      industry:'运维7',
                      contact:'7**********',
                    },
                    {
                      title: "部门3.2",
                      contactName:'张三6',
                      industry:'运维6',
                      contact:'6**********',
                    },
                    {
                      title: "部门3.3",
                      contactName:'张三5',
                      industry:'运维5',
                      contact:'5**********',
                    }
                  ]
                },
                {
                  title: "部门2.2",
                  contactName:'张三4',
                  industry:'运维4',
                  contact:'4**********',
                  children: [
                    {
                      title: "部门3.4",
                      contactName:'张三3',
                      industry:'运维3',
                      contact:'3**********',
                    },
                    {
                      title: "部门3.5",
                      contactName:'张三2',
                      industry:'运维2',
                      contact:'2**********',
                    }
                  ]
                },
                {
                  title: "部门2.3",
                  contactName:'张三1',
                  industry:'运维1',
                  contact:'1**********',
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    Tree
  }
};
</script>