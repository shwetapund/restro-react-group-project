import ReactDOM from 'react-dom/client';
import './index.css';

// import Card from './component/Card/Card';

// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './view/Home/Home';
import Products from './view/Products/Products';
import Categories from './view/Categories/Categories';
import Contact from './view/Contact/Contact';
import Login from './view/Login/Login';
import About from './view/About/About';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import FastFood from './view/Products/FastFood/FastFood';
import Vegeterian from './view/Products/Vegeterian/Vegeterian';
// import South from './view/Products/South/South';
import Nonveg from './view/Products/Nonveg/Nonveg'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/products",
    element:<Products/>,
  },
  {
    path: "/categories",
    element:<Categories/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    path: "/fastfood",
    element:<FastFood/>,
  },
  {
    path: "/nonveg",
    element:<Nonveg/>,
  },
  {
    path: "/vegeterian",
    element:<Vegeterian/>,
  },
 
  {
    path: "/login",
    element:<Login/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router} />

 
  </>
);

