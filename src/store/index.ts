import { configureStore } from '@reduxjs/toolkit'
import count from './module/count'

export default configureStore({
  reducer: {
    count,
  },
})
