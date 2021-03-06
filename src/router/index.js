import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Echarts from '../views/Echarts.vue'
import Goods from '../views/Goods.vue'
import RoleManage from "../views/RoleManage";
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {title: '首页'},
      children: [
        {
          path: '/goods',
          name: 'goods',
          component: Goods,
          meta: {title: '商场'},
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts,
          meta: {title: '表格'},
        },
        {
            path: '/roleManage',
          name: 'roleManage',
          component: RoleManage,
          meta: {title: '角色管理'},
        }
      ]
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})
