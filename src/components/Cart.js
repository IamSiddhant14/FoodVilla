import React from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { store } from '../utils/store';
import { useDispatch } from 'react-redux';
import { IMG_CDN_URL } from "./constants";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  function clear() {
    dispatch(clearCart());
  }

  return (
    <>
      <div>
        Cart : {cartItems.length} - Items
        <br />
        <button className="mt-2 p-3 rounded-xl bg-slate-500 " onClick={() => clear()}>Clear Cart</button>
      </div>

      <div className='flex flex-wrap'>
        {cartItems.map((ele) => <div className='h-96 w-60 m-4 rounded-xl bg-slate-200 flex flex-col items-center shadow-lg ' key={ele.card.info.id}>

          <img className='bg-cyan-800 shadow-lg shadow-cyan-500/100 h-40 m-2 text-2xl rounded-xl' src={IMG_CDN_URL + ele.card.info.imageId} />

          <h2 style={{ padding: '4px', color: "black", backgroundColor: "white", borderRadius: 10, wordBreak: 'break-word', margin: '2px', textAlign: 'center' }}>{ele.card.info.name}</h2>

          <h4 className="pt-2"> ★ {ele.card.info.ratings.aggregatedRating?.rating}</h4>

          <h4 className="pt-2"> Price For Two : ₹{(ele.card.info.price) / 100}</h4>

          <h3 style={{ padding: '4px', height: "80px", width: "14rem", color: "black", backgroundColor: "white", borderRadius: 10, wordBreak: 'break-word', marginTop: '15px', textAlign: 'center', overflowY: "hidden" }}>{ele.card.info.description}</h3>

        </div>
        )}
      </div>

    </>
  )
}

export default Cart
