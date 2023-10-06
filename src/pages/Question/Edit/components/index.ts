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
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 导出组件库组

export const componentGroup = [
  {
    groupName: '文本显示',
    components: [QuestionTitletConf],
  },
  {
    groupName: '用户输入',
    components: [QuestionInputConf],
  },
]

// 全部组件配置列表
const componentList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitletConf,
]

export const getComponentConfByType = (type: string) =>
  componentList.find((item) => item.type === type)
