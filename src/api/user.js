import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfo (data) {
  return request({
    url: '/currUser',
    method: 'post',
    data
  })
}
