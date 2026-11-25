import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import AddCafe from '../components/AddCafe.vue';
import EditCafe from '../components/EditCafe.vue';
import ViewCafe from '../components/ViewCafe.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add', name: 'AddCafe', component: AddCafe },
  { path: '/edit/:id', name: 'EditCafe', component: EditCafe },
  { path: '/view/:id', name: 'ViewCafe', component: ViewCafe }
];

export default createRouter({
  history: createWebHistory(),
  routes
});