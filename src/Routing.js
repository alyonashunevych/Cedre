import { createBrowserRouter } from 'react-router-dom';
import Main from './components/pages/Main';
import Layout from './components/Layout';
import Catalog from './components/pages/Catalog';

export const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          element: <Main/>,
          path: "/Cedre"
        },
        {
          element: <Catalog/>,
          path: "/catalog"
        }
      ]
    }
  ])