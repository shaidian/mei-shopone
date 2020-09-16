
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh',
    },
    title: '槑先森工作室出品，提供简约式风格web建站模板。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '商城系统,nuxt商城,nuxt.js商城,vue商城,vue.js商城,node商城,node.js商城,nuxt商城,vue商城,node商城,网上商城系统,网店系统,购物系统,网上购物系统,电商系统,晒点商城,槑先森'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script:[
      { src: 'https://hm.baidu.com/hm.js?8ef3c45ebdcb41bd818708bfc0feee27' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
    { src: '~/plugins/vue-toastification', ssr: false },
    { src: '~/plugins/vueperslides', ssr: false },
    { src: '~/plugins/axios', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  /*
  ** Global CSS
  */
  css: [
    './assets/scss/styles/animate.min.css',
    './assets/scss/styles/fontawesome.min.css',
    './assets/scss/styles/style.scss',
  ],
  /** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  /*
  ** Globally configure <nuxt-link> default active class.
  */
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Build configuration
  */
  build: {

 
    extend (config, { isDev, isClient }) {
      
    }
    
  }
}
