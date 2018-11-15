import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from './store/index';
import ElementUI from 'element-ui';
import firebaseConfig from './config/firebase';
import firebase from 'firebase';
import './assets/main.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('STATE_CHANGED', user)
    });
  },
}).$mount("#app");
