import Vue from "vue";
import _round from "lodash/round";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
Vue.filter("toPercent", (value) => _round(value * 100, 2));

/* eslint-disable no-new */
new Vue({
	components: {App},
	router,
	render: (h) => h(App)
}).$mount("#app");
