
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
    }
  },
  methods: {
    remove: function() {
      this.number_list--;
    }
  },
  mounted: function() {
    console.log(this.$refs.id.length)
    for (let i=0; i<this.$refs.id.length; i++){
        let id_msg = this.$refs.id[i].getMessage();
        console.log(id_msg);
    }
  },
}

</script>
<style>
  .V-select: {
    width: 500px ;
  }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
