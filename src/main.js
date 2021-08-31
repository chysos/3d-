import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';
import 'echarts-gl'


Vue.prototype.$echarts = echarts 

// Vue.use(echarts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
