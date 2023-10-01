import { FC } from 'react'
import './index.scss'
import QuestionTitle from '../QuestionTitle/component.tsx'
import QuestionInput from '../QuestionInput/component.tsx'

const EditCanvas: FC = () => {
  return (
    <div className="canvas-edit">
      <div className="edit-component-wrapper ">
        <div className="component">
          <QuestionTitle />
        </div>
      </div>
      <div className="edit-component-wrapper ">
        <div className="component">
          <QuestionInput />
        </div>
      </div>
    </div>
  )
}

export default EditCanvas
