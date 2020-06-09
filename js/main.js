// コンポーネント
// Vue.component('hello-component',{
//   template: '<p>Hello</p>'
// })

// var app =はつけてもつけなくてもいい
var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello vue.js!',
    //  3,getterとsetter
    basePrice:100
  },
  computed:{
    //1, 算出プロパティ
    reversedMessage:function(){
      return this.message.split('').reverse().join('')
    },
     //  3,methodsとの違い②getterとsetter
    taxIncludedPrice:{
      get:function(){
        return parseInt(this.basePrice * 1.08)
      },
      set:function(taxIncludedPrice){
        this.basePrice=Math.ceil(taxIncludedPrice / 1.08)
      }
    },
    // 4,methodsとの違い③算出プロパティのキャッシュ
    computedNumber:function(){
      console.log('computed!')
      return Math.random()
    }
  },
  // 2,methodsとの違い①算出プロパティとメソッドの比較:metodは()が必要
  methods:{
    reversedMessageMethod:function(){
      return this.message.split('').reverse().join('')
    },
    // 4,methodsとの違い③算出プロパティのキャッシュ
    methodsNumber:function(){
      console.log('methods!')
      return Math.random()
    }
  }
})