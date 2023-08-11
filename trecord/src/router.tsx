import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { LoginProfile } from './pages/LoginProfile';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { NewTrip } from './pages/NewTrip';
import { MyPage } from './pages/MyPage';
import { WelcomePage } from './pages/WelcomPage';
import { NewFeed } from './pages/NewFeed';
import { FeedDetail } from './pages/FeedDetail';
import { NewRecord } from './pages/NewRecord';
import { NewWriteRecord } from './pages/NewWriteRecord';

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
          path: '/newtrip',
          element: <NewTrip />,
        },
        {
          path: '/newfeed',
          element: <NewFeed />,
        },
        {
          path: '/feedDetail/:id',
          element: <FeedDetail />,
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
