import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { LoginProfile } from './pages/LoginProfile';
import { Auth } from './pages/Auth';
import { MyPage } from './pages/MyPage';
import { WelcomePage } from './pages/WelcomPage';
import { Suspense } from 'react';
import ModifyRecord from './pages/ModifyRecord';
import { NewRecord } from './pages/NewRecord';
import { NewWriteRecord } from './pages/NewWriteRecord';
import { Comment } from './pages/Comment';
import ModifyFeed from './pages/ModifyFeed';
import ModifyWriteRecord from './pages/ModifyWriteRecord';
import { RecordDetail } from './pages/RecordDetail';

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          index: true,
          element: <WelcomePage />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/auth',
          element: <Auth />,
        },
        {
          path: '/loginProfile',
          element: <LoginProfile />,
        },
        {
          path: '/home',
          async lazy() {
            const { Home } = await import('./pages/Home');
            return { Component: Home };
          },
        },
        {
          path: '/newfeed',
          async lazy() {
            const { NewFeed } = await import('./pages/NewFeed');
            return { Component: NewFeed };
          },
        },
        {
          path: '/feedDetail/:id',
          async lazy() {
            const { FeedDetail } = await import('./pages/FeedDetail');
            return { Component: FeedDetail };
          },
        },
        {
          path: '/modify-feed/:id',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ModifyFeed />
            </Suspense>
          ),
        },
        {
          path: '/newRecord',
          element: <NewRecord />,
        },
        {
          path: '/newRecord/newWrite',
          element: <NewWriteRecord />,
        },
        {
          path: '/modify-record/:id',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ModifyRecord />
            </Suspense>
          ),
        },
        {
          path: '/modify-record/:id/modify-write',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ModifyWriteRecord />
            </Suspense>
          ),
        },
        {
          path: '/recordDetail/:id',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <RecordDetail />
            </Suspense>
          ),
        },
        {
          path: '/comment/:id',
          element: <Comment />,
        },
        {
          path: '/mypage',
          element: <MyPage />,
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);
