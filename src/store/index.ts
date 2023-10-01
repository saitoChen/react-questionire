/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-25 00:16:47
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'
import count from './module/count'
import components from './module/components'

export default configureStore({
  reducer: {
    count,
    components,
  },
})
