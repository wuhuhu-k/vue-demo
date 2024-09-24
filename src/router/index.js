import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BigScreenScale',
      component: () => import('../views/BigScreenScale/BigScreen.vue')
    },
    {
      // 大屏适配方案 => 缩放
      path: '/bigScreenScale',
      name: 'BigScreenScale',
      component: () => import('../views/BigScreenScale/BigScreen.vue')
    },
    {
      // 大屏适配方案 => px转换为 vh vm
      path: '/bigScreenPx2vwvh',
      name: 'BigScreenPx2vwvh',
      component: () => import('../views/BigScreenPx2vwvh/BigScreen.vue')
    },
    {
      // 大屏适配方案 => px转换为 vh vm
      path: '/menu',
      name: 'MenuLimits',
      component: () => import('../views/MenuLimits/MenuLimits.vue')
    },
    {
      // 大屏适配方案 => px转换为 vh vm
      path: '/404',
      name: '404',
      component: () => import('../views/NotFound.vue')
    },
    {
      // 未识别路由自动匹配至404
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

router.beforeEach(async (to, from) => {
  console.log(to, 'beforeEach', from)
})

export default router
