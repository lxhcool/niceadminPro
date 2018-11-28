/**
 * 这里是网络请求接口
 */
const api = {
    login: '/user.json',
    register: '/user.json'
}

export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, "api", {value: api});
    }
}