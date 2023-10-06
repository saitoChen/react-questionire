/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:20:37
 * @Description:
 */
import { FC, useEffect } from 'react'
import './index.scss'
import EditCanvas from './components/EditCanvas'
import { componentsResponse } from '../../../data/question'
import { useDispatch } from 'react-redux'
import {
  resetComponents,
  changeSelectedId,
} from '../../../store/module/components'
import LeftPane from './LeftPane'

const Edit: FC = () => {
  const dispatch = useDispatch()
  const { componentList } = componentsResponse
  let selectedId = ''
  if (componentList.length > 0) selectedId = componentList[0]['fe_id']
  useEffect(() => {
    dispatch(resetComponents({ componentList, selectedId }))
  })

  const resetSelected = () => {
    dispatch(changeSelectedId(''))
  }

  return (
    <>
      <div className="question-container">
        <header>header</header>
        <div className="container-wrapper">
          <div className="content">
            <div className="left">
              <LeftPane />
            </div>
            <div className="main" onClick={resetSelected}>
              <div className="canvas-wrapper">
                <div className="canvas-scroll">
                  <EditCanvas />
                </div>
              </div>
            </div>
            <div className="right">rigth</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
