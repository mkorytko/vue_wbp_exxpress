import "./style/main.css";

import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./routes";

new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
  