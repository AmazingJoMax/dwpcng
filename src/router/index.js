import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import DownloadsView from '../views/DownloadsView.vue'
import WatchView from '../views/WatchView.vue'
import GiveView from '../views/GiveView.vue'
import NbFormView from '../views/NbFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/give',
    name: 'give',
    component: GiveView
  },
  {
    path: '/downloads',
    name: 'downloads',
    component: DownloadsView
  },
  {
    path: '/nbform',
    name: 'nbform',
    component: NbFormView
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
