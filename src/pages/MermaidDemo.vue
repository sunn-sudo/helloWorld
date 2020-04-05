<template>
  <div>
  <vue-mermaid
    :nodes="data"
    :config="config"
    type="graph LR"
  ></vue-mermaid>
  <button @click='add()'> 増える配列ボタン </button>
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
          group: "one",
          style: ""
        },
        {
          id: "2",
          text: 'INNER JOIN 結合テーブル1',
          next: ["3"],
          group: "one"
        },
        { id: "3", link: "---", text: "結合結果1", next: ["5"], group: "two" },
        { id: "4", text: "E", next: ["5"], group: "two" },
        { id: "5", link: "---", text: "結合結果2", group: "three" },
        { id: "6", text: "G", group: "three" },
      ],
      count: 0,
      config: {
        theme: 'neutral'
      }

    };
  },
  methods: {
    editNode(nodeId) {
      alert(nodeId);
    },
    add(){
      this.data[0].style = "fill:#f9f,stroke:#333,stroke-width:4px";
      this.data[0].text = '文字が変わったよー';
      console.log(document.getElementById('subGraph0').getElementsByTagName('rect'));
      if(this.count % 2 == 0) {
        setTimeout(function(){
          document.getElementById('subGraph0').getElementsByTagName('rect')[0].style.fill = "#FF0000";
          document.getElementById('subGraph1').getElementsByTagName('rect')[0].style.fill = "#FF0000";
          document.getElementById('subGraph2').getElementsByTagName('rect')[0].style.fill = "#FF0000";
        });
      }
      if(this.count % 2 == 1) {
        document.getElementById('subGraph0').getElementsByTagName('rect')[0].style.fill = "";
        document.getElementById('subGraph1').getElementsByTagName('rect')[0].style.fill = "";
        document.getElementById('subGraph2').getElementsByTagName('rect')[0].style.fill = "";
      }
      this.count++;
    }
  }
};
</script>

<style>

</style>
