/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-01 11:53:29
 * @Description:
 */
export type QuestionTitleDefaultProps = {
  text?: string
  level?: 1 | 2 | 3
  align?: 'start' | 'end' | 'center'

  onChange?: (newProps: Omit<QuestionTitleDefaultProps, 'onChange'>) => void
}

export const QuestionTitleDefault: QuestionTitleDefaultProps = {
  text: '默认标题',
  level: 1,
  align: 'start',
}
