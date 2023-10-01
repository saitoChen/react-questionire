import { ComponentInfoType } from '../store/module/components'

type ComponentType = 'questionTitle' | 'questionInput'

export type DecortateComonent<T> = {
  fe_id: string
  type: ComponentType
  title: string
  props: T
}

type ResType = {
  id: string
  title: string
  componentList: ComponentInfoType[]
}

export const componentsResponse: ResType = {
  id: String(+new Date()),
  title: '测试标题',
  componentList: [
    {
      fe_id: String(+new Date() + Math.random() * 1000),
      type: 'questionTitle',
      title: '标题',
      props: {
        level: 1,
        text: '测试标题',
        align: 'start',
      },
    },
    {
      fe_id: String(+new Date() + Math.random() * 1000),
      type: 'questionInput',
      title: '输入框',
      props: {
        title: '测试输入框',
        placeholder: '请输入内容...',
      },
    },
  ],
}
