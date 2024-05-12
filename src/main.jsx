import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./home"
import LoginPage from './loginPage';
import Settings from './settings';
import CreateEvent from './createEvent';
import EditEvent from './editEvent';
import CreateTask from './createTask';
import EditTask from './editTask';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },

  {
    path: "/login",
    element: <LoginPage/>
  },

  {
    path: "/settings",
    element: <Settings/>
  },

  {
    path: "/createTask",
    element: <CreateTask/>
  },

  {
    path: "/editTask",
    element: <EditTask/>
  },

  {
    path: "/createEvent",
    element: <CreateEvent/>
  },

  {
    path: "/editEvent",
    element: <EditEvent/>
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)





 

