// import React, { useState, useEffect } from 'react';

import { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom";


// class Profile extends React.Component {

//     constructor(props) {

//         super(props)

//         this.state = {
//             name: 'Siddhant',
//             val: 4
//         }
//     }


//     componentDidMount() {

//         this.setState({
//             name: "Sharma"
//         })

//         this.v = setInterval(() => {
//             console.log("valllalal")
//         }, 1000)

//     }

//     componentDidUpdate(prevProps, prevState) {

//         if (prevState.name != this.state.name) {
//             console.log("js");
//         }

//         console.log("hi am there componentDidUpdate")

//     }

//     componentWillUnmount() {

//         clearInterval(this.v);

//     }



//     render() {
//         return (
//             <>

//                 <h1>Hello  world {this.state.name}</h1>
//                 <h1>{this.props.name}</h1>

//             </>
//         )
//     }
// }

// export default Profile;

// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// const AppLayout = () => {

//     return (
//         <>
//         <Header/>
//            <Outlet />
//         <Footer/>
//         </>
//     )
// }

// const [ val , setValue ] = useState({});
// useEffect(() => {

// })

// const AppRouter = createBrowserRouter([
//     {

//         path: '/',
//         element: <body />,
//         errorElement: <ErrorComp />,
//         children: [
//             {
//                 path: '/',
//                 element: <body />,
//                 children: [{
//                     path: '/profile',
//                     element: <Profile />
//                 }]

//             },{
//                 path:'/cont',
//                 element : <Co/>,
//                 errorElement : <Error/>,


//             }
//             ,{
//                 path:'/con',
//                 element : <Contact/>,
//                 errorElement : <Error/>,


//             }

//         ]

//     }
// ])

// const root = ReactDOM.createRoot(document.getElementyId('root'));
// root.render(<RouterProvider route={ <AppLayout/>} />)

// import { createContext } from 'react';

// const userContext = createContext(
//     user: {
//             name: 'Siddhant ',
//             email: "siddhantsharma669@gmail.com"
//     });


// export default userContext ;


// import UserContext from '../utils/UserContext';

// const [ val , setval ] = useState({});

// <UserContext.Provider value ={

//     name : val , setval 
// } >

// </UserContext.Provider>

// class Profile extends React.Component {


const body = () => {

    const [ res , setRes ] = useState({});
    const [ feres , setFeres ] = useState({});
    const [ val , setVal ] = useState();

    useEffect(() => {

        const fe = async () => {

            const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1603516&lng=77.45585539999999&page_type=DESKTOP_WEB_LISTING");
            const json = data.json();
            
            setRes( json );
            setFeres( json );
            
        }

    });

    useFetcher( res , inp ){

         const ans = res.filtre((re) =>{
            re?.data?.name.toLowerCase().includes(inp.toLowerCase());

        } )

        setFeres( ans)
    }

    return (
         <>
        <Input type="text" value={val} onChange={(e) => setVal(e.target.value)} />

        <Button  onClick={() => useFetchers( res , val )}  >

        </Button>
         feres.map( (res) => {
            <RestaurantCard {...res.data} />
         })

 </Button>
    )
}