import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import AuthHandler from './components/AuthHandler';
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/oauth2/callback', component: AuthHandler }],
});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
