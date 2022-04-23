import request from '../../utils/request'

export function getQuoteList(data) {
  return request.get('/quote',{params:data})
}