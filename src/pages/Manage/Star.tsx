import { FC, useState } from 'react'
import './List.scss'
import questionList, { type QuestionItem } from '../../sourceData/questionList'
import QuestionCard from '../../components/QuestionCard'
import { Card, Typography } from 'antd'

const { Title } = Typography
const Star: FC = () => {
  const [starList] = useState(questionList)

  return (
    <div className="manage-list__wrapper">
      <header className="manage-list__header">
        <Title level={3}>星标问卷</Title>
        <div>
          <label>
            搜索：
            <input type="text" />
          </label>
        </div>
      </header>
      <section className="manage-list__content">
        {starList.length > 0 &&
          starList.map((item: QuestionItem) => {
            return (
              <Card title={item.title} style={{ marginTop: '20px' }}>
                <QuestionCard info={item} key={item._id} />
              </Card>
            )
          })}
        <div>loadingmore...上滑加载更多</div>
      </section>
    </div>
  )
}

export default Star
