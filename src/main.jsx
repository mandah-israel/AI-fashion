import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
import Features from './Pages/Features.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Design from './Pages/Design.jsx'
import Faq from './Pages/Faq.jsx'
import Store from './Pages/Store.jsx'
import Contact from './Pages/Contact.jsx'
import Terms from './Pages/Terms.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/features",
    element: <Features/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/design",
    element: <Design/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
  {
    path: "/store",
    element: <Store/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/terms",
    element: <Terms/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);