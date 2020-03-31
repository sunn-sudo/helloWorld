
<template src='./template.html'></template>

<script>
import Vue from 'vue'
import parts from './parts/preview';

Vue.component('parts', parts);

export default {
  el: 'Components',
  name: 'Components',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      th: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','th1','th2','th3',],
      td1: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
      td2: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
      td3: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
    }
  },
  methods: {
  },
  mounted: function() {
    console.log('起動')
  },
}

</script>
<style>
  .V-select: {
    width: 500px ;
  }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
