/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:28:15
 * @Description:
 */
import { FC } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './ManageLayout.scss'
import { Layout } from 'antd'
const { Content, Sider } = Layout
import { contentStyle, siderStyle } from './common'

const ManageLayout: FC = () => {
  return (
    <>
      <Layout className="manage-layout__container">
        <Layout hasSider>
          <Sider style={siderStyle} className="manage-layout__left">
            <div className="manage-layout__left__menu">
              <a>创建问卷</a>
              <Link to="/manage/list">我的问卷</Link>
              <Link to="/manage/star">星标问卷</Link>
              <Link to="/manage/tresh">回收站</Link>
            </div>
          </Sider>
          <Content style={contentStyle} className="manage-layout__right">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default ManageLayout
