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
      <div
        style={{
          backgroundColor: '#f0f2f5',
          boxSizing: 'border-box',
          height: '100vh',
        }}
      >
        <section style={{ height: '100vh' }} className="main-layout__contain">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default QuestionLayout
