/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-10-06 15:27:26
 * @Description:
 */
import { FC } from 'react'
import useGetQuestionInfo from '../../../hooks/useGetQuestionInfo'
import { getComponentConfByType } from './components/index'
import { ComponentPropsType } from './components/index'
import { useDispatch } from 'react-redux'
import { changeComponent } from '../../../store/module/components'

const PropComponent: FC = () => {
  const dispatcher = useDispatch()
  const NoComponent = () => <>暂无数据</>

  const { selectedComponent } = useGetQuestionInfo()

  if (!selectedComponent) {
    return <NoComponent />
  }
  const { type, props } = selectedComponent
  const currentComonentConf = getComponentConfByType(type)
  if (!currentComonentConf) {
    return <NoComponent />
  }

  const changeFormValue = (value: ComponentPropsType) => {
    const { fe_id } = selectedComponent

    dispatcher(changeComponent({ id: fe_id, newProps: value }))
  }

  const { PropComponent } = currentComonentConf
  return <PropComponent {...props} onChange={changeFormValue} />
}

export default PropComponent
