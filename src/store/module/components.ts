/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-10-01 14:25:13
 * @Description:
 */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { QuestionInputDefaultProps } from '../../pages/Question/Edit/components/QuestionInput/QuestionInputDefaultProps'
import { QuestionTitleDefaultProps } from '../../pages/Question/Edit/components/QuestionTitle/QuestionTitleDefaultProps'
import { ComponentPropsType } from '../../pages/Question/Edit/components/index'
export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: QuestionInputDefaultProps | QuestionTitleDefaultProps
}

export type ComponentStateType = {
  selectedId: string
  componentList: ComponentInfoType[]
}

const InitState: ComponentStateType = {
  selectedId: '',
  componentList: [],
}

export const ComponentsSlice = createSlice({
  name: 'components',
  initialState: InitState,
  reducers: {
    // 重置所有组件
    resetComponents: (
      state: ComponentStateType,
      action: PayloadAction<ComponentStateType>
    ) => (state = action.payload),
    changeSelectedId: (
      state: ComponentStateType,
      action: PayloadAction<string>
    ) => {
      state.selectedId = action.payload
    },
    addComponent: (
      state: ComponentStateType,
      action: PayloadAction<ComponentInfoType>
    ) => {
      const newComponent = action.payload
      const { selectedId, componentList } = state
      const idx = componentList.findIndex((item) => item.fe_id === selectedId)

      if (idx > -1) {
        // 如果有选中的组件的化，插入到后面一项
        componentList.splice(idx + 1, 0, newComponent)
      } else {
        componentList.push(newComponent)
      }

      // 同时默认选中新创建的组件
      state.selectedId = newComponent.fe_id
    },
    changeComponent: (
      state: ComponentStateType,
      action: PayloadAction<{ id: string; newProps: ComponentPropsType }>
    ) => {
      const { componentList } = state
      const needChangeComponent = componentList.find(
        (item) => item.fe_id === action.payload.id
      )

      if (needChangeComponent) {
        needChangeComponent.props = {
          ...needChangeComponent.props,
          ...action.payload.newProps,
        }
      }
    },
  },
})

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponent,
} = ComponentsSlice.actions

export default ComponentsSlice.reducer
