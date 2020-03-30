

import 'jquery-ui'
import tagit from 'tag-it'
// import 'v-jquery-collaboration'


<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>tag-it sample</h1>
    <!-- ②htmlファイルのbodyにtag入力するエリアを作成する -->
    <div class="search-area-colum form-contents">
      <!-- <input type="text" v-collaboration > -->
      <ul id="myTags" value="tags" name ="tags"></ul>
　  </div>
    <button v-collaboration id="btn">クリックでテキスト挿入</button>
    <p id="hogehoge"></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  directives: {
      collaboration: {
          inserted: function(el) {
            el.tagit({
               singleField: true,
               availableTags: ['php', 'ruby', 'react', 'reactNative', 'laravel']
            });
          }
      }


  },
  mounted: function() {
    // $("#myTags").tagit({
      // singleField: true,
    // 自動補完するワードを設定
      // availableTags: ['php', 'ruby', 'react', 'reactNative', 'laravel']
    // });
    $('#btn').click(function() {
      $("#hogehoge").text("テキスト挿入");
    });
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>