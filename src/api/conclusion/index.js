import request from '@/utils/request'

export function getConclusionList() {
  return request.get('/conclusion')
}