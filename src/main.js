import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import ElementUI from 'element-ui';
import store from './store/index';
import firebaseConfig from './config/firebase';
import firebase from 'firebase';
import { AntDesignOutline, DashboardOutline, MenuUnfoldOutline,  
         BellOutline, HomeOutline, UserOutline, ShoppingOutline,
         ContactsOutline, CodeSandboxOutline } from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-vue';
import 'firebase/firestore';
import './assets/main.scss';
import 'element-ui/lib/theme-chalk/index.css';


AntdIcon.add( AntDesignOutline, DashboardOutline, MenuUnfoldOutline, 
              BellOutline, HomeOutline, UserOutline, ShoppingOutline,
              ContactsOutline, CodeSandboxOutline );


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(AntdIcon);


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const storageRef = storage.ref();


db.settings({
  timestampsInSnapshots: true
})


Vue.$db = db;
Vue.$storageRef = storageRef;


router.beforeEach((to, from, next) => {
  const auth = store.getters.isUserAuthenticated

  if(to.path === "/account-settings") auth ? next() : next('/sign')
  if(to.path === "/account-center") auth ? next() : next('/sign')
  if(to.path === "/") auth ? next() : next('/home')
  else next(); 
});


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
