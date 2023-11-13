import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./pages/Home.jsx";
import Mobile from "./pages/Mobile.jsx";
import Display from './data/display';
import Displays from './data/Displays';
import TrendingData from './data/TrendingData';
import Trending_page from "./pages/Trending.jsx";
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from "react-router-dom";

const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
    <Route path='' element={<Home/>} />
    <Route path='Mobile' element={<Mobile/>}/>
    <Route path=':id' element={<Display/>}/>
    <Route path='Mobile/:id' element={<Displays/>}/>
    <Route path='Trending' element={<Trending_page/>}/>
    <Route path='Trending/:id' element={<TrendingData/>}/>
    </Route>
    )
    )
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <RouterProvider router={Router} />
);
