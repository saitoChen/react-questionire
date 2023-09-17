import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { headerStyle, contentStyle, footerStyle } from './common'
const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
  return (
    <>
      <Layout>
        <Header style={headerStyle}>header</Header>
        <Content style={contentStyle} className="main-layout__contain">
          <Outlet />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </>
  )
}

export default MainLayout
