import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import {
  Icon, Tree, Dialog, Button, Pagination
  // Select
} from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'
// import {
//   h,
//   ref,
//   onMounted,
//   onUpdated,
//   onBeforeUnmount,
//   watch
// } from 'vue';
Vue.component(Icon.name, Icon);
Vue.component(Button.name, Button); 
Vue.component(Dialog.name, Dialog);
Vue.component(Pagination.name, Pagination);



Vue.component(Tree.name, Tree);

Vue.use(VueAwesomeSwiper)
// Vue.mixin(mixin);
new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
