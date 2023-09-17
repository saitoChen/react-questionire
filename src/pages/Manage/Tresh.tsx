import { FC, useState } from 'react'
import { Table, Typography, Space, Modal } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import questionList, { type QuestionItem } from '../../sourceData/questionList'

const { Title } = Typography

const Tresh: FC = () => {
  const [treshList, setTreshList] = useState(questionList)

  const columns: ColumnsType<QuestionItem> = [
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '回答人数',
      dataIndex: 'answerCount',
      key: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      key: 'createAt',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: (_, record) => <div>{record.isPublished ? '是' : '否'}</div>,
    },
    {
      title: '是否星标',
      dataIndex: 'isStar',
      key: 'isStar',
      render: (_, record) => <div>{record.isStar ? '是' : '否'}</div>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <span>恢复</span>
          <span onClick={() => confirm(record)}>删除</span>
        </Space>
      ),
    },
  ]

  const confirm = (record: QuestionItem) => {
    Modal.confirm({
      title: 'Confirm',
      content: '是否删除本条数据',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        deleteItem(record)
      },
    })
  }

  const deleteItem = (del: QuestionItem) => {
    setTreshList(treshList.filter((item) => item._id !== del._id))
  }

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
      <section>
        <Table
          rowKey={(record) => record._id}
          columns={columns}
          dataSource={treshList}
        />
        ;
      </section>
    </div>
  )
}

export default Tresh
