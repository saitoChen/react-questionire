/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-10-06 15:27:26
 * @Description:
 */
import { FC } from 'react'
import useGetQuestionInfo from '../../../hooks/useGetQuestionInfo'
import { getComponentConfByType } from './components/index'

const PropComponent: FC = () => {
  const NoComponent = () => <>暂无数据</>

  const { selectedComponent } = useGetQuestionInfo()

  console.log('selectedComponent ->', selectedComponent)
  if (!selectedComponent) {
    return <NoComponent />
  }
  const { type, props } = selectedComponent
  const currentComonentConf = getComponentConfByType(type)
  console.log('currentComonentConf ->', currentComonentConf)
  if (!currentComonentConf) {
    return <NoComponent />
  }

  const { PropComponent } = currentComonentConf
  console.log(PropComponent)
  return <PropComponent {...props} />
  //   return <div>123</div>
}

export default PropComponent
