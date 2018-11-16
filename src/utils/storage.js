const localStorage = window.localStorage

// 设置 storage
function setStorage(key, val) {
  if (typeof val === 'object') {
    val = JSON.stringify(value)
  }
  localStorage.setItem(key, val)
}

// 获取 storage
function getStorage(key) {
  const val = localStorage.getItem(key) || ''
  try {
    return JSON.parse(val)
  } catch (e) {
    return val
  }
}

// 移除 storage
function removeStorage(key) {
  localStorage.removeItem(key)
}

export default {
  setStorage,
  getStorage,
  removeStorage
}