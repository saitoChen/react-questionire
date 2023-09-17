import { FC } from 'react'
import { Outlet } from 'react-router-dom'
/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:15:04
 * @Description:
 */
const MainLayout: FC = () => {
  return (
    <>
      <header>header</header>
      <section className="main-layout__contain">
        <Outlet />
      </section>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
