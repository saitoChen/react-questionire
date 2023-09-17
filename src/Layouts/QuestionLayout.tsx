import { FC } from 'react'
import { Outlet } from 'react-router-dom'
/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:15:04
 * @Description:
 */
const QuestionLayout: FC = () => {
  return (
    <>
      <header>QuestionLayout</header>
      <section className="main-layout__contain">
        <Outlet />
      </section>
    </>
  )
}

export default QuestionLayout
