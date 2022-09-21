import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4626a09e = () => interopDefault(import('../pages/claim/index.vue' /* webpackChunkName: "pages/claim/index" */))
const _58643642 = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _242ca0b8 = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _24695936 = () => interopDefault(import('../pages/history/index.vue' /* webpackChunkName: "pages/history/index" */))
const _814fb4e0 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _7d6b27de = () => interopDefault(import('../pages/nft/index.vue' /* webpackChunkName: "pages/nft/index" */))
const _7fe9cff1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/claim",
    component: _4626a09e,
    name: "claim"
  }, {
    path: "/contact-us",
    component: _58643642,
    name: "contact-us"
  }, {
    path: "/faq",
    component: _242ca0b8,
    name: "faq"
  }, {
    path: "/history",
    component: _24695936,
    name: "history"
  }, {
    path: "/home",
    component: _814fb4e0,
    name: "home"
  }, {
    path: "/nft",
    component: _7d6b27de,
    name: "nft"
  }, {
    path: "/",
    component: _7fe9cff1,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
