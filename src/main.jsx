import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvaider from './Provaider/AuthProvaider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvaider>
        <RouterProvider router={router} />
      </AuthProvaider>
    </React.StrictMode>,
  </div>
)
