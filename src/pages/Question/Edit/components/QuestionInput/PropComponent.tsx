import { FC } from 'react'
import { type QuestionInputDefaultProps } from './QuestionInputDefaultProps'
import { Form, Input } from 'antd'
const PropInputComponent: FC<QuestionInputDefaultProps> = (props) => {
  const { title, placeholder } = props
  return (
    <Form
      layout="vertical"
      name="QuestionInputForm"
      initialValues={{ title, placeholder }}
    >
      <Form.Item
        label="title"
        name="title"
        rules={[{ required: true, message: '请输入标题' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default PropInputComponent
