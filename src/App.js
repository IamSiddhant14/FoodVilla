import React , { lazy , Suspense , useState } from 'react';
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
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart'; Lazyloading/chuking taking place 
import Cart from './components/Cart';
import UserContext from './utils/UserContext';
/*
Header

  - Logo
  - Nav Items(Right side)
  - Cart


Body

  - SearchBar
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

const Instamart = lazy(() => import ("./components/Instamart")) // Lazyloading / chuking / dynamic import  taking place 


// Nested Children 
const AppLayout = () => {

  const [user , setUser] = useState({
    name:"Ak",
    email:"n@gmail.com"
  })

  return (
    <UserContext.Provider  value={{
      user:user,setUser:setUser
    }}>
    <React.Fragment>
      <Header />
      
      {/* Children are aways been rendered inside outlet */}
      <Outlet />
      
      <Footer />
    </React.Fragment>
    </UserContext.Provider>
  )
}

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,  
    errorElement: <Error />,
    // Any error in this path ("/") will result in error component rendering 

    children: [
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path:"profile",
            element: <Profile/>// Its outlet is been create in about.js file
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
         path:'/cart',
         element: <Cart/>
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />
      },
      {
        path:'/instamart',
        element: <Suspense fallback={<Shimmer/>}>
          <Instamart/>
          </Suspense>
      }
    ]
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);