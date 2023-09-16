import { FC, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import questionList, { type QuestionItem } from '../sourceData/questionList'
const List: FC = () => {
  const [list, setList] = useState(questionList)

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
    <>
      <header>
        <p>问卷列表</p>
        <div>
          <label>
            搜索：
            <input type="text" />
          </label>
        </div>
      </header>
      <section>
        {list.map((item: QuestionItem) => {
          return <QuestionCard info={item} />
        })}
      </section>
      <button onClick={addQuestionire}>添加问卷</button>
      <footer></footer>
    </>
  )
}

export default List
