
<template>
    <div>
      <h1>sample is v-Select</H1>
      <v-select id='select' name="hoge" :options="options" v-model="selected"></v-select>
    </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)

export default {
  name: 'V_SelectTest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     selected: '',
      options: [
      'foo',
      'bar',
      'baz'
      ]
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
