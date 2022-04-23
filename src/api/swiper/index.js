import request from '../../utils/request'

export function getSwiperList(data) {
  return request.get('/swiper',{params:data})
}
