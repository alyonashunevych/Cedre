import { createBrowserRouter } from 'react-router-dom';
import Main from './components/pages/Main';
import Layout from './components/Layout';
import Catalog from './components/pages/Catalog';
import Delivery from './components/pages/Delivery';
import AboutUs from './components/pages/AboutUs';

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
        },
        {
          element: <Delivery/>,
          path: "/delivery"
        },
        {
          element: <AboutUs/>,
          path: "/about-us"
        }
      ]
    }
  ])