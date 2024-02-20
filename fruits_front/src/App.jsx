import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import ApplePage from './pages/ApplePage';
import NotFound from './pages/NotFound';
import BananaPage from './pages/BananaPage';
import MangoPage from './pages/MangoPage';
import OrangePage from './pages/OrangePage';
import WatermelonPage from './pages/WatermelonPage';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services, {actionReview} from "./pages/Services";
import Contact, { loginAction } from './pages/Contact';
import { hloader as homeloader, loader} from "./utils/home.utils";
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <HomeOne />,
            loader: loader
          },
          {
            path: ":idh",
            element: <HomeTwo />,
            loader: homeloader
          }
        ]
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/products/apple",
        element: <ApplePage />
      },
      {
        path: "/products/banana",
        element: <BananaPage />
      },
      {
        path: "/products/mango",
        element: <MangoPage />
      },
      {
        path: "/products/orange",
        element: <OrangePage />
      },
      {
        path: "/products/watermelon",
        element: <WatermelonPage />
      },
      {
        path: "/services",
        element: <Services />,
        action: actionReview
      },
      {
        path: "/login",
        action: loginAction,
        element: <Contact/>
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])


function App() {

 
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
