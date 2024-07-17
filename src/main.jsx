import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './page/Dashboard';
import Root from './page/Root';
import Login from './page/Login';
import Register from './page/Register';
import UserProfile from './component/UserProfile';
import Private from './route/Private';
import SendMoney from './component/SendMoney';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/userProfile',
        element:<Private><UserProfile></UserProfile></Private>
      },
      {
        path:'/send',
        element:<SendMoney></SendMoney>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
