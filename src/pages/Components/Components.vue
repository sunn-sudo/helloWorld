
<template src='./template.html'></template>

<script>
import Vue from 'vue'
import parts from './parts/preview';

Vue.component('parts', parts);

export default {
  name: 'Components',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      number_list: 10,
      open_tag_no: null,
    }
  },
  methods: {
    remove: function() {
      this.number_list--;
    },
    open: function(){
      this.open_tag_no = 5;
    }
  },
  mounted: function() {
    console.log(this.$refs.id)
    console.log(this.$refs.id.length)
    let id_msg = '';
    let th_summary = [];
    for (let i=0; i<this.$refs.id.length; i++){
        id_msg = this.$refs.id[i].getMessage();
        th_summary = th_summary.concat(this.$refs.id[i].th);
    }
    this.$refs.id[4].th =  th_summary;
    console.log(th_summary);
  },
}

</script>
<style>
  .V-select: {
    width: 500px ;
  }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
