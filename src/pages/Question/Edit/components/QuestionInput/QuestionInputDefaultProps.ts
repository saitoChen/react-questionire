export type QuestionInputDefaultProps = {
  title?: string
  placeholder?: string
  onChange?: (newProps: Omit<QuestionInputDefaultProps, 'onChange'>) => void
}

export const QuestionInputDefault: QuestionInputDefaultProps = {
  title: '测试输入框',
  placeholder: '请输入内容',
}
