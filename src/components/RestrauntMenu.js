import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./constants";
import Shimmer from './Shimmer';
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {

  const ans = useParams();
  // console.log(ans.id)
  
  const restaurant = useRestaurant(ans.id);// Here this is coustm made Hook
  
  // Early return 
  // if( !restaurant ){
  //   return <Shimmer/>
  // }
  // console.log(restaurant)
  return (!restaurant?.menu) ? (<Shimmer />): (

    <div className="menu" >
      {/* console.log('i am here') */}
      <div>
      
        <h1>Restaurant id: {ans.id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>

      <div>
        <h1>Menu </h1>
        <ul>

         {/* {console.log(restaurant?.menu?.items)} */}
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}


        </ul>
      </div>


    </div>

  )
}

export default RestrauntMenu;
