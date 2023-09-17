/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:15:48
 * @Descriptione
 */
import { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login: FC = () => {
  const nav = useNavigate()
  const toHome = () => {
    nav('/')
  }
  return (
    <>
      <div>这里是登录</div>
      <button onClick={toHome}>点击登录</button>
      <Link to="/register" style={{ textDecoration: 'underlne' }}>
        注册
      </Link>
    </>
  )
}

export default Login
