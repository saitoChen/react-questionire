import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { QuestionInputDefaultProps } from '../../pages/Question/Edit/components/QuestionInput/QuestionInputDefaultProps'
import { QuestionTitleDefaultProps } from '../../pages/Question/Edit/components/QuestionTitle/QuestionTitleDefaultProps'

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
  },
})

export const { resetComponents, changeSelectedId } = ComponentsSlice.actions

export default ComponentsSlice.reducer
