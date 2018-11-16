import http from '@/utils/http'

export function login(params) {
  return http({
    url: '',
    method: 'post',
    data: params
  })
}