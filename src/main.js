import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {
  Menu, 
  Submenu,
  MenuItem,
  MenuItemGroup,
  Col,
  Carousel,
  CarouselItem,
} from 'element-ui';
import Mock from './mock' // 刚刚手写的mock.js文件
import axios from 'axios' // axios http请求库
import infiniteScroll from 'vue-infinite-scroll';//导入无限加载插件

axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url
Vue.prototype.$http = axios

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
