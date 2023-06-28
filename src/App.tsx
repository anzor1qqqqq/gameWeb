import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './page/error';
import MainMenu from './page/mainMenu';
import Static from './page/static/static';
import BasketPage from './page/basket';
import FavorityPage from './page/favority';
import ProductPageInfo from './page/product';

import { dataFetch } from './utilities/auxFunc';

import { TLocalStorage } from './types/types';

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
        loader: async (): Promise<TLocalStorage | TLocalStorage[] | undefined> => {
          return dataFetch('all');
        },
      },
      {
        path: '/basket',
        element: <BasketPage/>,
        loader: async (): Promise<TLocalStorage | TLocalStorage[] | undefined> => {
          return dataFetch('all');
        },
      },
      {
        path: '/favority',
        element: <FavorityPage/>
      },
      {
        path: '/product/:id',
        element: <ProductPageInfo/>,
        loader: ({params}): Promise<TLocalStorage | TLocalStorage[] | undefined> => {
          return dataFetch('certain', Number(params.id));  
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