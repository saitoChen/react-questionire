import { FC } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const nav = useNavigate()
  const toList = () => nav('/manage/list')
  return (
    <>
      <div>这是首页</div>
      <Button onClick={toList}>点击进入列表页</Button>
    </>
  )
}

export default Home
