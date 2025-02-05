import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const App=()=>{
  return <div className="app">
    <Header/>
    <Outlet/>
  </div>
}

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>
}])

const Main=()=>{
  return <RouterProvider router={AppRouter}/>
}

export default Main;