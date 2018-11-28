import axios from 'axios'
import Qs from 'qs'

const service = axios.create(
    {
        baseURL: 'https://wd7833385346sutxth.wilddogio.com',
        timeout: 5000,
        responseType: 'json'
    }
)

service.interceptors.request.use(config => {
    /**
     * 这里是请求的拦截器
     * 这边需要序列化请求参数
     */
    if (config.data) {
        // config.data = Qs.stringify(config.data)
    }
    return config
}, error => {
    return Promise.reject(error)
})

service.interceptors.response.use(res => {
    /**
     * 请求成功返回的拦截器
     */
    return res
}, error => {
    /**
     * 处理请求错误
     */
    return Promise.reject(error);
})

export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, "$http", {value: service});
    }
}
