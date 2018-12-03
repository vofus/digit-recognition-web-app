import Vue from "vue";
import axios from "axios";
import _round from "lodash/round";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.filter("toPercent", (value) => _round(value * 100, 2));

/* eslint-disable no-new */
new Vue({
	components: {App},
	router,
	store,
	render: (h) => h(App)
}).$mount("#app");
