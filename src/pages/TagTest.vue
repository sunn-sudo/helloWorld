

<template>
  <div class="tag_test">
    <h1>tag-it sample</h1>
    <tags-input element-id="tags"
                id='tag'
                v-model = "selectedTags"
                @blur='tag_blur()'></tags-input>
  </div>
</template>

<script>
import VoerroTagsInput from '@voerro/vue-tagsinput';
import Vue from 'vue';

Vue.component('tags-input', VoerroTagsInput);

export default {
  name: 'TagTest',
  data () {
    return {
      selectedTags: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    tag_blur() {
      console.log('ブラー')
      var temp = $('input:text');
      if (temp != '') {
        // tagFromInput(false);
      }
    }

  },
  mounted: function() {
    console.log('起動要塞')
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->