import Vue from 'vue'
import VueRouter  from 'vue-router'
import login from '@/views/login'
import home from '@/views/home'
import NotFound from '@/views/error/404'
import main from '@/views/main'
import user from '@/views/user'
import menu from '@/views/menu'
import dept from '@/views/dept'
import role from '@/views/role'
import log from '@/views/log'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {path:'/main',component:main,name:'系统介绍'},
        {path:'/user',component:user,name:'用户管理'},
        {path:'/menu',component:menu,name:'菜单管理'},
        { path: '/role', component: role, name: '角色管理' },
        { path: '/dept', component: dept, name: '机构管理' },
        { path: '/log', component: log, name: '日志管理' }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,{
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to,from,next)=>{
  let user = sessionStorage.getItem('user');
  if (to.path=='/login'){
    if (user){
      next({path:'/'})
    }else {
      next()
    }
  }else {
    if (!user){
      next({path:'/login'});
    }else {
      next();
    }
  }
})

export default router

