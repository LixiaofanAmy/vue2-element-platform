import axios from 'axios'

const _axios = axios.create()

_axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // const status = error.toJSON().status
    // 根据 status 做全局错误处理
    return Promise.reject(error)
  }
)

export default _axios
