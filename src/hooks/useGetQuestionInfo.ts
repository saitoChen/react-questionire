import { useSelector } from 'react-redux'
import { StateType } from '../store'

const useGetQuestionInfo = () => {
  const data = useSelector((state: StateType) => state.components)

  console.log(data)

  return { data }
}

export default useGetQuestionInfo
