import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserStart from './components/user/UserStart.vue'

export const routes = [
  { path: '/', component: Home, name: 'anasayfa' },
  {
    path: '/user',
    component: User,
    name: 'kullanıcı',
    children: [
      { path: '', component: UserStart }, // /user
      { path: ':id', component: UserDetail }, // /user/12
      { path: ':id/edit', component: UserEdit } // /user/12/edit
    ]
  }
]
