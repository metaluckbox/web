export const Bottom = () => import('../../components/Bottom.vue' /* webpackChunkName: "components/bottom" */).then(c => wrapFunctional(c.default || c))
export const FAQ = () => import('../../components/FAQ.vue' /* webpackChunkName: "components/f-a-q" */).then(c => wrapFunctional(c.default || c))
export const Head = () => import('../../components/Head.vue' /* webpackChunkName: "components/head" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const PopupMetamask = () => import('../../components/Popup/Metamask.vue' /* webpackChunkName: "components/popup-metamask" */).then(c => wrapFunctional(c.default || c))
export const PopupSell = () => import('../../components/Popup/Sell.vue' /* webpackChunkName: "components/popup-sell" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
