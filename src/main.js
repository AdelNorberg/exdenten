import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from './store/index';
import ElementUI from 'element-ui';
import './assets/main.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
