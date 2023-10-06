import { useSelector } from 'react-redux'
import { StateType } from '../store'

const useGetQuestionInfo = () => {
  const data = useSelector((state: StateType) => state.components)
  const { componentList, selectedId } = data
  const selectedComponent = componentList.find(
    (item) => item.fe_id === selectedId
  )

  return { data, componentList, selectedId, selectedComponent }
}

export default useGetQuestionInfo
