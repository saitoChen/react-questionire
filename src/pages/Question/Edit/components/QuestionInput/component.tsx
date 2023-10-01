import { FC } from 'react'
import {
  type QuestionInputDefaultProps,
  QuestionInputDefault,
} from './QuestionInputDefaultProps'
import { Typography, Input } from 'antd'

const { Paragraph } = Typography

const QuestionInput: FC<QuestionInputDefaultProps> = (props) => {
  const { title = '', placeholder = '' } = { ...QuestionInputDefault, ...props }

  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <Input placeholder={placeholder}></Input>
    </div>
  )
}

export default QuestionInput
