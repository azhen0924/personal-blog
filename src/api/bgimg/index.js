import request from '../../utils/request'

export function getBgimg(data) {
  return request.get('/bgimg',{params:data})
}