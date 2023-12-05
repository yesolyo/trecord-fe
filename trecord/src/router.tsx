import { Outlet, createBrowserRouter } from 'react-router-dom';
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
import { ModifyProfile } from './pages/ModifyProfile';
import { MyPageComment } from './pages/MyPageComment';
import ModifyFeed from './pages/ModifyFeed';
import ModifyWriteRecord from './pages/ModifyWriteRecord';
import { Alarm } from './pages/Alarm';
import {
  RecordDetail,
  Fallback as RecordDetailFallback,
} from './pages/RecordDetail';
import { FeedDetail, Fallback as FeedDetailFallback } from './pages/FeedDetail';
import { Comment } from './pages/Comment';
import { MyPageLike } from './pages/MyPageLike';
import { MyPageInvite } from './pages/MyPageInvite';
import { RealTimeNotificationProvider } from '@components/common/RealTimeNotification';

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
          element: (
            <RealTimeNotificationProvider>
              <Outlet />
            </RealTimeNotificationProvider>
          ),

          children: [
            {
              path: '/home',
              async lazy() {
                const { Home } = await import('./pages/Home');
                return { Component: Home };
              },
            },
            {
              path: '/alarm',
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Alarm />
                </Suspense>
              ),
            },
            {
              path: '/mypage',
              element: (
                <Suspense fallback={<FeedDetailFallback />}>
                  <MyPage />
                </Suspense>
              ),
            },
          ],
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
          element: (
            <Suspense fallback={<FeedDetailFallback />}>
              <FeedDetail />
            </Suspense>
          ),
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
            <Suspense fallback={<RecordDetailFallback />}>
              <RecordDetail />
            </Suspense>
          ),
        },
        {
          path: '/comment/:id',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Comment />
            </Suspense>
          ),
        },
        {
          path: '/modifyProfile',
          element: <ModifyProfile />,
        },
        {
          path: '/mypageComment',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <MyPageComment />
            </Suspense>
          ),
        },
        {
          path: '/mypageLike',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <MyPageLike />
            </Suspense>
          ),
        },
        {
          path: '/mypageInvite',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <MyPageInvite />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);
