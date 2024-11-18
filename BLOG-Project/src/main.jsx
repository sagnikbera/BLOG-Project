import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Protected as AuthLayout, Login, Signup } from './components'
import Home from './components/pages/Home'
import AllPost from './components/pages/AllPost'
import AddPost from './components/pages/AddPost'
import EditPost from './components/pages/EditPost'
import Post from './components/pages/Post'
import Signup from './components/pages/Signup'
import { Login , AuthLayout } from './components/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <AuthLayout authenication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authenication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element: (
          <AuthLayout authenication>
            {" "}
            <AllPost />
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authenication>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authenication>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router={router}/>
  </Provider>,
)
