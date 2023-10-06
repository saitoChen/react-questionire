/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-06 11:30:09
 * @Description:
 */
import { componentGroup } from '../index'
import { Typography } from 'antd'
import { ComponentConfType } from '../index'
import { useDispatch } from 'react-redux'
import { addComponent } from '../../../../../store/module/components'
import './index.scss'

const { Title } = Typography

const CurrentComponent = (c: ComponentConfType) => {
  const { title, type, Component, defaultProps } = c
  const dispatcher = useDispatch()

  const handlerClick = () => {
    dispatcher(
      addComponent({
        fe_id: String(+new Date() + Math.random() * 1000),
        type,
        title,
        props: defaultProps,
      })
    )
  }

  return (
    <div key={type} className="lib-wrapper" onClick={handlerClick}>
      <div className="lib-wrapper-item">
        <Component />
      </div>
    </div>
  )
}

const Libs = () => {
  return (
    <>
      {componentGroup.map((item, index) => {
        return (
          <div key={index}>
            <Title
              level={3}
              style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : 0 }}
            >
              {item.groupName}
            </Title>
            <div>{item.components.map((c) => CurrentComponent(c))}</div>
          </div>
        )
      })}
    </>
  )
}

export default Libs
