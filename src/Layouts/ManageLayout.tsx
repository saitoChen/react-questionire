/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:28:15
 * @Description:
 */
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import './ManageLayout.scss'

const ManageLayout: FC = () => {
  return (
    <>
      <div className="manage-layout__container">
        <div className="manage-layout__left">
          <ul>
            <li>创建问卷</li>
            <li>我的问卷</li>
            <li>星标问卷</li>
            <li>回收站</li>
          </ul>
        </div>
        <section className="manage-layout__right">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default ManageLayout
