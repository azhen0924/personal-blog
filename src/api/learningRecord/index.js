import request from '@/utils/request'

export function getLearningList() {
  return request.get('/learningRecord')
}