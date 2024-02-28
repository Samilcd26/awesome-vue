import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store/index.js';
import router from './router/index.js';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);



new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
