import {createRouter, createWebHashHistory} from 'vue-router';
import Index from '../pages/index'
import Select from '../pages/select'

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;