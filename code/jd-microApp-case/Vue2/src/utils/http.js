import axios from 'axios'

axios.defaults.baseURL = ''
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
      axios.post(url,params).then(function (res) { 
        resolve(res)
      }).catch(function (err) { 
        reject(err)
      })
    })
  }
}

export default Net