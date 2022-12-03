import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// eslint-disable-next-line no-undef
const Home = () => import('@/components/Home')
const BlogCard = () => import('@/components/blogCard')
const Project = () => import('@/components/Project')
const Drug = () => import('@/components/Drug')
const RNA = () => import('@/components/RNA')
// const About = () => import('@/components/About')

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index/Home'
    },
    {
      path: '/index',
      redirect: '/index/Home',
      component: Home,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: BlogCard
        },
        // {
        //   path: 'About',
        //   name: 'About',
        //   component: About
        // },
        {
          path: 'App',
          name: 'App',
          component: Project
        },
        {
          path: 'Drug',
          name: 'Drug',
          component: Drug
        },
        {
          path: 'RNA',
          name: 'RNA',
          component: RNA
        }
      ]
    },
    {
      path: '/404',
      component: resolve => require(['@/components/notFound'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
