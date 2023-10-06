import Component from './component'
import { QuestionInputDefault } from './QuestionInputDefaultProps'
import PropInputComponent from './PropComponent'

export default {
  title: '标题',
  type: 'questionInput',
  Component,
  PropComponent: PropInputComponent,
  defaultProps: QuestionInputDefault,
}
