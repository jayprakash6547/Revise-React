import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Github, { githubInfoLoader } from './Component/Github/Github'
import User from './Component/User/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'github',
        element: <Github />,
        loader: githubInfoLoader,
      },
      {
        path: 'user/:userid',
        element: <User />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
