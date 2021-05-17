import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./plugins/VueApexCharts";
import "./style/index.scss";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
