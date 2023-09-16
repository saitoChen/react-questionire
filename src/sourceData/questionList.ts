export type QuestionItem = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}

const questionList: QuestionItem[] = [
  {
    _id: '1',
    title: '问卷1',
    isPublished: true,
    isStar: false,
    answerCount: 3,
    createAt: '2023/03/27 13:07',
  },
  {
    _id: '2',
    title: '问卷2',
    isPublished: false,
    isStar: false,
    answerCount: 3,
    createAt: '2023/03/27 13:07',
  },
  {
    _id: '3',
    title: '问卷3',
    isPublished: true,
    isStar: true,
    answerCount: 4,
    createAt: '2023/03/27 13:07',
  },
  {
    _id: '4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 3,
    createAt: '2023/03/27 13:07',
  },
]

export default questionList
