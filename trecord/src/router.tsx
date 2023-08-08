import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Login } from './pages/Login'
import { LoginProfile } from './pages/LoginProfile'
import { Auth } from './pages/Auth'

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
      ],
    },
  ],
  {
    basename: '/',
  },
)
