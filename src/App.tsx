/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-16 11:10:30
 * @Description:
 */

import './App.css'

import { RouterProvider } from 'react-router-dom'
import routerConfig from './router/index'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routerConfig}></RouterProvider>
    </Provider>
  )
}

export default App
