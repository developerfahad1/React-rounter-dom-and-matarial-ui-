import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './screen/About.jsx';
import Home from './screen/Home.jsx';
import Contact from './screen/Contact.jsx';
import Product from './screen/Product.jsx';
import SingleProduct from './screen/SingleProduct.jsx';
import Notfound from './screen/Notfound.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'product',
      element: <Product />
    },
    {
      path: 'singleproduct/:id',
      element: <SingleProduct />
    },
    {
      path: '*',
      element: <Notfound />
    },
  ]
  }
])

createRoot(document.getElementById('root')).render(


  <RouterProvider router={router}>
     <App />
  </RouterProvider>

   

)
