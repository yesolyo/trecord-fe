import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { LoginProfile } from './pages/LoginProfile';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { NewTrip } from './pages/NewTrip';
import { MyPage } from './pages/MyPage';

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          index: true,
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
          path: '/newTrip',
          element: <NewTrip />,
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
