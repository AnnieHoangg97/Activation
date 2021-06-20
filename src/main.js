import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vueJquery from 'vue-jquery'
import { BootstrapVue, IconsPlugin, LayoutPlugin, ModalPlugin, CardPlugin, VBScrollspyPlugin, DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(vueJquery)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
Vue.use(LayoutPlugin)
// This imports <b-modal> as well as the v-b-modal directive as a plugin:
Vue.use(ModalPlugin)
// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
Vue.use(CardPlugin)
// This imports directive v-b-scrollspy as a plugin:
Vue.use(VBScrollspyPlugin)
// This imports the dropdown and table plugins
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
