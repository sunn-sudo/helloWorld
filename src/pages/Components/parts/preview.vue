<template>
<div v-show='msg.length < 10'>
  <H1>{{ msg }}</H1>
  <table>
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
</template>

<script>
export default {
  props:{
    msg: {
      type: String,
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
  data() {
    return{
      msg: '',
      th: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','th1','th2','th3',],
      td1: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
      td2: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
      td3: ['th1','th2','th3','th1','th2','th3','th1','th2','th3','td1','td2','td3',],
    }
  }
}
</script>
