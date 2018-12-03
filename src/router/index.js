import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			redirect: "/recognition"
		},
		{
			path: "/recognition",
			name: "recognition",
			component: require("@/components/RecognitionScreen").default
		}
	]
});
