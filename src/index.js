import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Projects from './pages/projects';
import Blog from './pages/blog';
import About from './pages/about';
import Contact from './pages/contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/navbar';
import { Header } from 'react-fullpage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


// <RouterProvider router={router} />
root.render(
  <React.StrictMode>
    
    <div className='body'>
      <Navbar router={router}/>
      <RouterProvider router={router} />
    </div>


  </React.StrictMode>
);