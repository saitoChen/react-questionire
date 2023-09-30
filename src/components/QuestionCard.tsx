/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-16 21:45:45
 * @Description:
 */
import { QuestionItem } from '../sourceData/questionList'
import { FC } from 'react'

type QuestionCardProps = {
  info: QuestionItem
}

const QuestionCard: FC<QuestionCardProps> = ({ info }) => {
  return (
    <>
      <header>
        <div>问卷名称：{info.title}</div>
        <div>问卷时间：{info.createAt}</div>
      </header>
      <section>
        <div>{info.isStar}</div>
        <div>{info.isPublished ? '已发布' : '未发布'}</div>
        <div>星标：{info.isStar ? '是' : '否'}</div>
      </section>
    </>
  )
}

export default QuestionCard
