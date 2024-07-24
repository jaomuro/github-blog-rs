import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { PostDetails } from './pages/postDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post',
    element: <PostDetails />,
  },
])
