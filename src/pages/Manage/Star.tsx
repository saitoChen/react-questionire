/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:19:14
 * @Description:
 */
import { FC, useReducer } from 'react'

type InitState = {
  count: number
  payload: number
}

type Action = {
  type: string
  payload: number
}

const initialState: InitState = {
  count: 0,
  payload: 10,
}

const reducer = (state: InitState, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + state.payload, payload: state.payload }
    case 'minus':
      return { count: state.count - state.payload, payload: state.payload }
    case 'changePayload':
      return { count: state.count, payload: action.payload }
    default:
      return { count: state.count, payload: action.payload }
  }
}

const Star: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>这里是star</div>
      <div>这里展示state{state.count}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: 'minus', payload: 10 })}>
        minus
      </button>
      <button onClick={() => dispatch({ type: 'changePayload', payload: 30 })}>
        changePayload
      </button>
    </>
  )
}

export default Star
