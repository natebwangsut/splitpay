import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";

import 'jquery/dist/jquery.min';
import "bulma/css/bulma.min.css";
import "hammerjs/hammer.min";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
