/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-16 21:34:11
 * @Description:
 */
import { FC, useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import questionList, { type QuestionItem } from '../../sourceData/questionList'
import { useSearchParams } from 'react-router-dom'
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
          return <QuestionCard info={item} key={item._id} />
        })}
      </section>
      <button onClick={addQuestionire}>添加问卷</button>
      <footer></footer>
    </>
  )
}

export default List
