import { get } from '@/utils/methods'
import type { UserRequest } from './loginType'

export  function userRequest(params: UserRequest) {
   return get('/users', { params }); //测试接口
}
