import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { LoginProfile } from './pages/LoginProfile';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { MyPage } from './pages/MyPage';
import { WelcomePage } from './pages/WelcomPage';
import { NewFeed } from './pages/NewFeed';
import { NewRecord } from './pages/NewRecord';
import { NewWriteRecord } from './pages/NewWriteRecord';
import { RecordDetail } from './pages/RecordDetail';
import { Comment } from './pages/Comment';
import { MyPageProfile } from './pages/MyPageProfile';

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
          element: <Home />,
        },
        {
          path: '/newfeed',
          element: <NewFeed />,
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
          async lazy() {
            const ModifyFeed = await import('./pages/ModifyFeed');
            return { Component: ModifyFeed.default };
          },
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
          path: '/recordDetail/:id',
          element: <RecordDetail />,
        },
        {
          path: '/comment/:id',
          element: <Comment />,
        },
        {
          path: '/mypage',
          element: <MyPage />,
        },
        {
          path: '/mypageProfile',
          element: <MyPageProfile />,
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);
