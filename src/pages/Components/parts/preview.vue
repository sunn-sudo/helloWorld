<template>
<div>
  <H1> {{msg}}</H1>
  <button　@click="sendData()">ここを押すと・・・・・・</button>
  <div class="sticky_table_wrapper">
  <table id='test' class='sticky_table'>
    <thead>
      <!--テンプレート置き換え-->
      <tr>
        <th v-for="item in th">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!--テンプレート置き換え-->
      <tr>
        <td v-for="item in td1">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in td2">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in td3">
          {{ item }}
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
</template>

<script>
export default {
  props:{
    msg: {
      type: Number,
      default: () => {
          return '闇の炎に焼かれて消えろ!!';
      },
    },
    value: {
      default: () => {
          return [];
      },
    },
  },
  methods: {
    getMessage: function(){
      return 'これが子のコンポネット呼び出しの技_' + this.msg;
    },
    sendData:function(){
      console.log("親要素にデータを渡すよ")
      console.log(this.$emit)
      this.$emit('attack',50);
    }
  },
  data() {
    return{
      th: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','th1','th2','th3',],
      td1: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
      td2: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
      td3: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
    }
  }
}
</script>

<style type="text/css">
#test{
  border: solid 1px #808080;
  padding: 0.5em;
}

.sticky_table thead th {
  /* 縦スクロール時に固定する */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  /* tbody内のセルより手前に表示する */
  z-index: 1;
}

.sticky_table th:first-child {
  /* 横スクロール時に固定する */
  position: -webkit-sticky;
  position: sticky;
  left: 0;
}
.sticky_table thead th:first-child {
  /* ヘッダー行内の他のセルより手前に表示する */
  z-index: 2;
}

.sticky_table_wrapper {
  overflow: scroll;
  width: auto;
}

</style>
