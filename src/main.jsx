import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Layout/Home';
import Order from './Component/Order/Order';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import Shop from './Component/Shop/Shop';
import getStoreCard from './Component/Loader/Loader';
import SignUp from './Component/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      }
      ,
      {
        path: 'order',
        element: <Order></Order>,
        loader: getStoreCard
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
