import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact'
import RestrauntMenu
 from './components/RestrauntMenu';
import Profile from './components/Profile';

/*
Header
  - Logo
  - Nav Items(Right side)
  - Cart


Body

  - SearchBarf
  - Restaurant List
    - Restaurant Card
      -Image
      -Name
      -Rating
      -Desp/Cusines


Footer

  - Links
  - Copyright


*/


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,  
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path:"profile",
            element: <Profile/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />
      }
    ]
  }


])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);