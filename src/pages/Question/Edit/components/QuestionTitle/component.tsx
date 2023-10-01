/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-01 11:53:04
 * @Description:
 */
import { FC } from 'react'
import {
  type QuestionTitleDefaultProps,
  QuestionTitleDefault,
} from './QuestionTitleDefaultProps'
import { Typography } from 'antd'

const { Title } = Typography

const QuestionTitle: FC<QuestionTitleDefaultProps> = (props) => {
  const {
    level = 1,
    text = '',
    align = 'start',
  } = { ...QuestionTitleDefault, ...props }

  const generateFontSize = (level: QuestionTitleDefaultProps['level']) => {
    if (level === 1) return '24px'
    if (level === 2) return '20px'
    if (level === 3) return '16px'
    return '16px'
  }

  return (
    <div>
      <Title
        level={level}
        style={{
          textAlign: align,
          marginBottom: 0,
          marginTop: 0,
          fontSize: generateFontSize(level),
        }}
      >
        {text}
      </Title>
    </div>
  )
}

export default QuestionTitle
