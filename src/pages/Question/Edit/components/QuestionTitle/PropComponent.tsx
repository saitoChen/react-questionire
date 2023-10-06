/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-10-06 14:58:33
 * @Description:
 */
import { FC } from 'react'
import { type QuestionTitleDefaultProps } from './QuestionTitleDefaultProps'
import { Form, Input, Select } from 'antd'

const { Option } = Select

const PropTitleComponent: FC<QuestionTitleDefaultProps> = (props) => {
  const { text, level, align } = props
  return (
    <Form
      layout="vertical"
      name="QuestionInputForm"
      initialValues={{ text, level, align }}
    >
      <Form.Item
        label="text"
        name="text"
        rules={[{ required: true, message: '请输入标题' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="level" label="level">
        <Select placeholder="请选择层级" allowClear>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
      </Form.Item>
      <Form.Item name="align" label="level">
        <Select placeholder="对齐方式" allowClear>
          <Option value="start">左对齐</Option>
          <Option value="center">居中</Option>
          <Option value="end">右对齐</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}

export default PropTitleComponent
