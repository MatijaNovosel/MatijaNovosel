import Home from '../views/Home.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/:pathMatch(.*)",
    name: 'error',
    component: Error
  }
]

export default routes;