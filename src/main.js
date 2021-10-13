import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
