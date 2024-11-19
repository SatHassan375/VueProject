import { createApp } from "vue";
import "./style.css";
import "vuetify/styles"; // Add this line
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css'; // Ensure MDI is installed and imported

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
app.mount("#app");
