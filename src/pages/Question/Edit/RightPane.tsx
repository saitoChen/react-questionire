/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-06 11:07:22
 * @Description:
 */
import { FC } from 'react'
import { Tabs } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import PropComponent from './PropComponent'
const RightPane: FC = () => {
  const tabsItems = [
    {
      key: 'props',
      label: (
        <span>
          <AppstoreOutlined />
          属性
        </span>
      ),
      children: (
        <div>
          <PropComponent />
        </div>
      ),
    },
    {
      key: 'setting',
      label: (
        <span>
          <BarsOutlined />
          页面设置
        </span>
      ),
      children: <div>页面设置</div>,
    },
  ]

  return <Tabs defaultActiveKey="props" items={tabsItems} />
}

export default RightPane
