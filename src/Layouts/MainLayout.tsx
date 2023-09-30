/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:22:00
 * @Description:
 */
import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/module/count'

const themeState = {
  light: {
    background: '#fff',
  },
  dark: {
    background: '#000',
  },
}

export const ThemeContext = createContext({
  theme: themeState.light,
  setThemeFn: () => {},
})

const MainLayout: FC = () => {
  const [theme, setTheme] = useState<{ background: string }>(themeState.light)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const countObj = useSelector((state: any) => state.count)
  const dispatch = useDispatch()
  const setThemeFn = () => {
    setTheme({
      ...themeState.dark,
    })
  }

  return (
    <>
      <header>header, 全局展示的count -》{countObj.count}</header>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <section className="main-layout__contain">
        <ThemeContext.Provider value={{ theme, setThemeFn }}>
          <Outlet />
        </ThemeContext.Provider>
      </section>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
