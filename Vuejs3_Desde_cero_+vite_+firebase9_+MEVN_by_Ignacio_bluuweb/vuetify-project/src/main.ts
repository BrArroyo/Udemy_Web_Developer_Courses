import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import * as Vue from "vue";

import axios from "axios";
import VueAxios from "vue-axios";

const app = Vue.createApp(App);
app.use(VueAxios, axios);

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
