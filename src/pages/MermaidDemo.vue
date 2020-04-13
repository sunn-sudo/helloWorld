<template>
  <div>
  <vue-mermaid
    :nodes="data"
    :config="config"
    type="graph LR"
    class="demo"
  ></vue-mermaid>
  <button @click='add()'> 変えるボタン </button>
  <button @click='add2()'> 増やすボタン </button>
  </div>
</template>

<script>
// type="graph LR"
import VueMermaid from "vue-mermaid";
import Vue from 'vue';
Vue.use(VueMermaid);

export default {
  data: function() {
    return {
       msg: '表示するよ',
       data: [
        {
          id: "1",
          text: 'INNER JOIN 結合テーブル1',
          next: ["3"],
          class: "test1",
          group: "one",
          style: "",
          theme: 'neutral'
        },
        {
          id: "2",
          text: 'INNER JOIN 結合テーブル1',
          next: ["3"],
          group: "one"
        },
        { id: "3", link: "---", text: "結合結果1", next: ["5"], group: "two" },
        { id: "5", link: "---", text: "結合結果2", group: "three" },
        { id: "6", text: "G", group: "three" },
      ],
      count: 0,
      config: {
        // theme: 'neutral'
      }

    };
  },
  methods: {
    editNode(nodeId) {
      alert(nodeId);
    },
    add(){
      this.data[0].text = '文字が変わったよー';
      console.log(document.getElementById('subGraph0').getElementsByTagName('rect'));
      if(this.count % 2 == 0) {
        setTimeout(function(){
          let len = $("g.cluster > rect").length
          $("g.cluster > rect").eq(len -3).css("fill","#9f9")
          //$("g.cluster > rect").eq(1).css("fill","#9f9")
        });
      }
      if(this.count % 2 == 1) {
        $("g.cluster > rect").css("fill","");
      }
      this.count++;
    },
    add2(){
      this.data.push({ id: "7", text: "G", group: "1wwww" });
    }
  }
  //    g#subGraph0.cluster rect{
//        fill:#FF0000;
//        stroke:#FFFF00;
//        stroke-width:4px;
//    }
};
</script>

<style>

</style>
