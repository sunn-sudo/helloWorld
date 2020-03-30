

<template>
    <div>
      　<p>日付＊：</p>
        <input type="text" name='date' v-model="date"
        v-validate="'date_format:YYYY/MM/DD'" />
        <span v-if="errors.has('date')">{{ errors.first('date') }}</span>
        <button @click='cheak()'></button>
    </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);

export default {
  name: 'ErrorTest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date: ''
    }
  },
  methods: {
    cheak : function (){

        // 必須項目にする
        this.$validator.attach({
        name: 'date',
        rules: 'required'
        })

        this.$validator.validateAll().then((result) => {
          console.log('入力完了');
        })
    }
  },
  mounted: function() {
    console.log('起動')
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->