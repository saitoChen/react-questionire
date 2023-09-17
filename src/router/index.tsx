/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:55:54
 * @Description:
 */
import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import ManageLayout from '../Layouts/ManageLayout'
import QuestionLayout from '../Layouts/QuestionLayout'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

import ManageList from '../pages/Manage/List'
import ManageStar from '../pages/Manage/Star'
import ManageTresh from '../pages/Manage/Tresh'

import QuestionEdit from '../pages/Question/Edit'
import QuestionStat from '../pages/Question/Stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: '/manage',
            element: <Navigate to="/manage/list" />,
          },
          {
            path: 'list',
            index: true,
            element: <ManageList />,
          },
          {
            path: 'star',
            element: <ManageStar />,
          },
          {
            path: 'tresh',
            element: <ManageTresh />,
          },
        ],
      },
    ],
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        index: true,
        element: <QuestionEdit />,
      },
      {
        path: 'stat/:id',
        element: <QuestionStat />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
