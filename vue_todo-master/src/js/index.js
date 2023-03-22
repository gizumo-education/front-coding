import Vue from 'vue';
import VueRouter from 'vue-router';

// import routes from 'TodoRouterDir/routes'; // コメントアウトする
import routes from 'TodoVuexDir/routes'; // コメントアウト外す
import store from 'TodoVuexDir/store'; // コメントアウト外す

import '../scss/global.scss';

// import myApp from './first/index.vue';
// import myApp from 'TodoDir/index.vue';
// import myApp from 'TodoRouterDir/index.vue'; // コメントアウトする
import myApp from 'TodoVuexDir/index.vue'; // コメントアウト外す

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store, // コメントアウト外す
  render: h => h(myApp),
  // render: h => h(myApp), は↓の書き方を短くしたもの
  // render: function (createElement) {
  //   return createElement(myApp)
  // }
});
