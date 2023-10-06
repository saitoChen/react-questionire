/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-10-06 14:35:06
 * @Description:
 */
import Component from './component'
import { QuestionTitleDefault } from './QuestionTitleDefaultProps'
import PropTitleComponent from './PropComponent'

export default {
  title: '标题',
  type: 'questionTitle',
  Component,
  PropComponent: PropTitleComponent,
  defaultProps: QuestionTitleDefault,
}
