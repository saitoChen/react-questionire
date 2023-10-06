import { FC } from 'react'
import { type QuestionInputDefaultProps } from './QuestionInputDefaultProps'
import { Form, Input } from 'antd'
const PropInputComponent: FC<QuestionInputDefaultProps> = (props) => {
  const { title, placeholder, onChange } = props

  const { useForm } = Form
  const [form] = useForm()
  const setValue = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      name="QuestionInputForm"
      initialValues={{ title, placeholder }}
      onValuesChange={setValue}
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
