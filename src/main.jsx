import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./pages/Home.jsx";
import Mobile from "./pages/Mobile.jsx";
import Display from './data/display';
import Trending_page from "./pages/Trending.jsx";
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from "react-router-dom";
import { CartProvider } from './context/cart.jsx';
import AddToCart from './pages/AddToCart.jsx';

const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
    <Route path='' element={<Home/>} />
    <Route path='Mobile' element={<Mobile/>}/>
    <Route path='Trending' element={<Trending_page/>}/>
    <Route path=':id' element={<Display/>}/>
    <Route path='Mobile/:id' element={<Display/>}/>
    <Route path='AddToCart' element={<AddToCart/>}/>
    </Route>
    )
    )
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <CartProvider>
      <RouterProvider router={Router} />
      </CartProvider>
);
