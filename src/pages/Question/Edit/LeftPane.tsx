/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-06 11:07:22
 * @Description:
 */
import { FC } from 'react'
import { Tabs } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import Libs from './components/ComponentLib'
const LeftPane: FC = () => {
  const tabsItems = [
    {
      key: 'componentLib',
      label: (
        <span>
          <AppstoreOutlined />
          组件库
        </span>
      ),
      children: (
        <div>
          <Libs />
        </div>
      ),
    },
    {
      key: 'layers',
      label: (
        <span>
          <BarsOutlined />
          图层
        </span>
      ),
      children: <div>图层</div>,
    },
  ]

  return <Tabs defaultActiveKey="2" items={tabsItems} />
}

export default LeftPane
