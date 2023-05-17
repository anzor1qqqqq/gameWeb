import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/error';
import MainMenu from './page/mainMenu';
import Static from './static/static';
import './style/header.css'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Static/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <MainMenu/>,
        loader: async () => {
          return await fetch('src/json/data-base.json').then(response => response.json()).then(obj => obj);
        }
      }
    ]
  }]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App