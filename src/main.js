import { createApp } from "vue";
import {router} from './router'
import "./style.css";
import "vuetify/styles"; // Add this line
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css'; // Ensure MDI is installed and imported
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import App from "./App.vue";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi", // Set MDI as default
  },
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(router)
app.mount("#app");
