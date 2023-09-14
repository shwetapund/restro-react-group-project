import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './component/Card/Card';
import Navbar from './component/Navbar/Navbar';
// import Home from './view/Product/Home/Home';
import Home from './view/Home/Home';







import Products from './view/Products/Products'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/products",
    element:<Products/>,
  },
  // {
  //   path: "/about",
  //   element:About,
  // },
  // {
  //   path: "/contact",
  //   element:Contact,
  // },
  // {
  //   path: "/login",
  //   element:Login,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
<RouterProvider router={router} />
  {/* <Home/> */}
  </>
);

