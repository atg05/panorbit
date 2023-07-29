import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './layout/homepage/Homepage';
import Profile from './view/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/profile/:name',
    element: <Profile />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
