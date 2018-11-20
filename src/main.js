import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import ElementUI from 'element-ui';
import store from './store/index';
import firebaseConfig from './config/firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import './assets/main.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

db.settings({
  timestampsInSnapshots: true
})

Vue.$db = db;

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
