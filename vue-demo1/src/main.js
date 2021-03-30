import Vue from 'vue'
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import './assets/css/border.css';
import './assets/css/comm.css';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
