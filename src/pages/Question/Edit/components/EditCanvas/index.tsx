/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-01 13:06:33
 * @Description:
 */
import { FC } from 'react'
import './index.scss'
import useGetQuestionInfo from '../../../../../hooks/useGetQuestionInfo.ts'
import { getComponentConfByType } from '../index.ts'
import { ComponentInfoType } from '../../../../../store/module/components.ts'
import { changeSelectedId } from '../../../../../store/module/components.ts'
import { useDispatch } from 'react-redux'

const getComponent = (componentInfo: ComponentInfoType) => {
  const { type, props } = componentInfo

  const componentConf = getComponentConfByType(type)

  if (!componentConf) return null

  const { Component } = componentConf

  return <Component {...props} />
}

const EditCanvas: FC = () => {
  const { data } = useGetQuestionInfo()

  const { componentList, selectedId } = data

  const dispatch = useDispatch()

  const changeSelected = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    dispatch(changeSelectedId(id))
  }

  return (
    <div className="canvas-edit">
      {componentList.map((component) => {
        const { fe_id } = component
        // edit-component-wrapper
        return (
          <div
            key={fe_id}
            className={
              fe_id === selectedId
                ? 'edit-component-wrapper selected'
                : 'edit-component-wrapper'
            }
            onClick={(e) => changeSelected(e, fe_id)}
          >
            <div className="component">{getComponent(component)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default EditCanvas
