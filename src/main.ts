import { createApp } from "vue";
import '../theme/F89E21/index.css';
import ElementPlus from 'element-plus';
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
