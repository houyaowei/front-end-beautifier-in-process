import { App } from 'vue'

import MVuiButton from "./src/button.vue";
MVuiButton.install = (app) => app.component("MVuiButton", MVuiButton);
export default MVuiButton;
