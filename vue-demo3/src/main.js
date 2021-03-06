import Vue from 'vue'
import ElementUI from 'element-ui';
import './assets/css/reset.css';
import './assets/css/border.css';
import './assets/css/comm.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')