import Cookies from 'js-cookie'
const tokenKey = 'niceToken'

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function getToken() {
  return Cookies.get(tokenKey)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}