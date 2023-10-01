/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-01 19:59:54
 * @Description:
 */
import { FC } from 'react'
import { QuestionInputDefaultProps } from './QuestionInput/QuestionInputDefaultProps'
import { QuestionTitleDefaultProps } from './QuestionTitle/QuestionTitleDefaultProps'
import QuestionInputConf from './QuestionInput/index'
import QuestionTitletConf from './QuestionTitle/index'

export type ComponentPropsType = QuestionInputDefaultProps &
  QuestionTitleDefaultProps

// 配置的类型
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

const componentList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitletConf,
]

export const getComponentConfByType = (type: string) =>
  componentList.find((item) => item.type === type)
