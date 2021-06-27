import Vue from "vue";
import App from "./App.vue";
import {BootstrapVue, IconsPlugin, BadgePlugin, AlertPlugin} from 'bootstrap-vue'
import _ from "lodash"
import VueApexCharts from 'vue-apexcharts'


import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "@grapecity/wijmo.styles/wijmo.css";
import '@grapecity/wijmo.vue2.core';
import '@grapecity/wijmo.vue2.chart';
import '@grapecity/wijmo.vue2.chart.finance';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BadgePlugin)
Vue.use(AlertPlugin)
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

Vue.prototype._ = _

new Vue({
    render: (h) => h(App),
}).$mount("#app");
