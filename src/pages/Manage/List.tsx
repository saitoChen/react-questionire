/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-16 21:34:11
 * @Description:
 */
import { FC, useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import questionList, { type QuestionItem } from '../../sourceData/questionList'
import { useSearchParams } from 'react-router-dom'
import { Button, Card, Typography } from 'antd'
import './List.scss'

const { Title } = Typography

const List: FC = () => {
  const [list, setList] = useState(questionList)
  const [searchParams] = useSearchParams()
  // /manage/list?name=jeff&age=16
  console.log('searchParams.name ->', searchParams.get('name'))
  console.log('searchParams.age ->', searchParams.get('age'))

  const addQuestionire = () => {
    setList([
      ...list,
      {
        _id: String(+new Date() + Math.random() * 1000),
        title: '问卷' + +new Date(),
        isPublished: false,
        isStar: false,
        answerCount: 0,
        createAt: String(new Date()),
      },
    ])
  }

  return (
    <div className="manage-list__wrapper">
      <header className="manage-list__header">
        <Title level={3}>问卷列表</Title>
        <div>
          <label>
            搜索：
            <input type="text" />
          </label>
        </div>
      </header>
      <section className="manage-list__content">
        {list.length > 0 &&
          list.map((item: QuestionItem) => {
            return (
              <Card title={item.title} style={{ marginTop: '20px' }}>
                <QuestionCard info={item} key={item._id} />
              </Card>
            )
          })}
        <div>loadingmore...上滑加载更多</div>
      </section>
      <Button type="primary" onClick={addQuestionire}>
        添加问卷
      </Button>
    </div>
  )
}

export default List
