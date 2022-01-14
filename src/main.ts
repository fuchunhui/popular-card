import {createApp} from 'vue';
import App from './App.vue';
import './assets/css/base.less';
import './assets/css/theme.less';
import {initDB} from './db';

initDB().then(() => {
  createApp(App).mount('#app');
});
