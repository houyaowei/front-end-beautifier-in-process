import axios from 'axios'
import {  ElMessageBox } from 'element-plus'
axios.defaults.baseURL = ''

if (window.__MICRO_APP_ENVIRONMENT__) {
  const dataForChild = window.microApp.getData()
  if (dataForChild) { 
    const { token } = dataForChild
    axios.defaults.headers["x-client-token"] = token;
  }
} else { 
   axios.defaults.headers["x-client-token"] = 'fb2904e4c541445a8e986d2af2bd94bb';
}


const Net = {
  getJson: function (url, params) { 
    let i = 0
    for (let x in params) { 
      if (i === 0) {
        url += '?' + x + '=' + params[x]
      } else { 
        url += '&' + x + '=' + params[x]
      }
      i++
    }
    return new Promise(function (resolve, reject) { 
      axios.get(url,params).then(function (res) { 
        resolve(res)
      }).catch(function (err) { 
        reject(err)
      })
    })
    
  },
  postJson: function (url,params) { 
    return new Promise(function (resolve, reject) { 
      axios.post(url, params).then(function (res) { 
        let { code } = res.data
        if (code === '000000') {
          resolve(res)
        } else if (code === '000004') { 
          ElMessageBox.confirm("暂未登录，请先进行登录", "温馨提示",).then(() => { 
             // 第一种跳转方式
             // window.microApp.location.href = '/main/login' 
             // 第二种跳转方式
            const baseRouter = window.microApp.router.getBaseAppRouter()
            baseRouter.push("/main/login")
          })
        }
      }).catch(function (err) { 
        reject(err)
      })
    })
  }
}

export default Net