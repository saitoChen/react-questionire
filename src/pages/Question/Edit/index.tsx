import { FC } from 'react'
import { useParams } from 'react-router-dom'

/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:15:04
 * @Description:
 */
const Edit: FC = () => {
  const { id } = useParams()
  console.log(id)
  return <>这是Edit, id为{id}</>
}

export default Edit
