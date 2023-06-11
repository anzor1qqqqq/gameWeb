import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/error';
import MainMenu from './page/mainMenu';
import Static from './page/static/static';
import BasketPage from './page/basket';
import FavorityPage from './page/favority';
import './style/header.css'

const App = (): JSX.Element => {
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
        },
      },
      {
        path: '/basket',
        element: <BasketPage/>,
      },
      {
        path: '/favority',
        element: <FavorityPage/>
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