/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-16 11:10:30
 * @Description:
 */

import './App.css'

import { RouterProvider } from 'react-router-dom'
import routerConfig from './router/index'
function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>
}

export default App
