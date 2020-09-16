// 导入NProgress, 包对应的JS和CSS
import Vue from 'vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:7890/api/private/v1/'

axios.interceptors.request.use(config => {
  NProgress.start()
  // console.log(config)
  // 为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
// response 拦截器中,  隐藏进度条NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios



