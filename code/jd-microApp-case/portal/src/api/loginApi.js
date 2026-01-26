import http from '@/utils/http'

// 登录接口
const accountLogin = (params) => { 
  return http.postJson('/api/ucenter/login/accountLogin',params).then(res => res.data)
}

// 登出接口
const logout = (params) => { 
  return http.getJson('/api/ucenter/login/logout',params).then(res => res.data)
}

export default {
  accountLogin,
  logout
}