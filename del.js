import { createContext, useEffect } from "react";

const UserContext = createContext({

    user:{
        name : "siddhant" ,
        number : 7389609908
    }

})

export default UserContext;

import { userContext } from 'react';

< UserContext.Provider values={{ 
   user: user , setUser : setUser
}}>


</UserContext.Provider>

import { userContext } from './';

<userContext.consumer>
    {({user} => {

        
    })}
</userContext.consumer>

import { useContext } from 'react';

const { user , setUser } = useContext(userContext);



import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./src/utils/cartSlice";
import productSlice from './pk';

const store = configureStore({
    reducer:{
        cart: cartSlice,
        product : productSlice
    }
})

export default store ;

import { createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const cartSlice = createSlice({

    name: 'cart' , 

    initialState: {
        items: []
    },

    reducers:{

        addItems: (state , action ) => {
            state.items.push(action.payload);
        },

        removeItem : ( state , action ) => {
       state.items.pop();
        },

        clearCart : (state  , action ) => {
            state.items = [];
        }

    }
})

export const { addItems , removeItems , clearCart } = cartSlice.actions;
export default cartSlice.reducer;


<Provider  store={store}>

</Provider>


import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { store } from './';
import { clearCart } from "./src/utils/cartSlice";

const dispatch = useDispatch();
dispatch(clearCart());

const user = useSelector((store) => store.cart.items )

import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './../CART USING REDUX TOOLKIT/redux_cart/src/store/productsSlice';

const STATUS = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error'
});

const productslice = createSlice({

    name: 'product',
    initialState: {
        data : [] ,
        status : STATUS.IDLE
    }
    , reducers: {

        setProduct(state , action ){
            state.data.push(action.payload);
        },

        setStatus(state , action ){
            state.status = action.payload
        }
    }
})

export const { setStatus , setProduct } = productslice.actions;
export default productslice.reducer ;


export function fetchProduct( ){

    async function fetchProductsThunks( dispatch , getState ){

       dispatch(setStatus(STATUS.IDLE));
       
       try{

        const data = await fetch( ' ');
        const json = await data.json();

        setProduct(json);
        setStatus(STATUS.IDLE);

       }catch{
        setStatus(STATUS.ERROR);
       }

    }

}


import { useDispatch } from "react";
import {useSelector }from 'react/redux';
import { store } from './store';
import { fetchProducts } from "./../CART USING REDUX TOOLKIT/redux_cart/src/store/productsSlice";
const dispatch = useDispatch();

const data = useSelector((store) => store.productcart.data)
const status = useSelector( (store) => store.productcrt.status)

useEffect(() => {
 dispatch( fetchProduct())
} , [])