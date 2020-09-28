import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserStart from './components/user/UserStart.vue'
import Header from './components/Header.vue'

export const routes = [
  {
    path: '/',
    name: 'anasayfa',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-top': Header
    },
    name: 'kullanıcı',
    children: [
      { path: '', component: UserStart }, // /user
      { path: ':id', component: UserDetail }, // /user/12
      { path: ':id/edit', component: UserEdit, name: 'userEdit' } // /user/12/edit
    ]
  },

  {
    path: '/redirect', redirect: '/user'
    // path: '/redirect', redirect: { name: 'anasayfa' }
  },
  {
    path: '*', redirect: '/' // anasayfaya yönlendirir.
  }
]
