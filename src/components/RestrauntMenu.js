import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./constants";
import Shimmer from './Shimmer';
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from './constants'

const RestrauntMenu = () => {

  const ans = useParams();

  const restaurant = useRestaurant(ans.id);// Here this is coustm made Hook


  
  // Early return 
  // if (!restaurant) {
  //   return 
  // }

  return  (!restaurant) ? (<Shimmer />) : (
    
     
      <div className='flex flex-wrap'>


          {restaurant[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((ele) => {
           
           return  <div className='h-96 w-60 m-4 rounded-xl bg-slate-200 flex flex-col items-center shadow-lg ' key={ele.card.info.id}>

                <img className='bg-cyan-800 shadow-lg shadow-cyan-500/100 h-40 m-2 text-2xl rounded-xl' src={IMG_CDN_URL + ele.card.info.imageId} />

                <h2 style={{ padding: '4px', color: "black", backgroundColor: "white", borderRadius: 10 , wordBreak:'break-word' , margin:'2px' , textAlign:'center'}}>{ele.card.info.name}</h2>

                
                <h4 className="pt-2"> ★ {ele.card.info.ratings.aggregatedRating?.rating }</h4>

                <h4 className="pt-2"> Price For Two : ₹{(ele.card.info.price)/100}</h4>

                <h3 style={{ padding: '4px', height:"200px" ,color: "black", backgroundColor: "white", borderRadius: 10 , wordBreak:'break-word' , marginTop:'15px',textAlign:'center' , overflowY:"hidden"}}>{ele.card.info.description}</h3>
                
            </div>

            

            
          })}


      </div>

  )
}

export default RestrauntMenu;
