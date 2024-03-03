import { App } from 'vue';

import MVuiButton from "./src/button.vue";
MVuiButton.install = (app: App) => app.component("MVuiButton", MVuiButton);

export default MVuiButton;

export {
    MVuiButton
}
