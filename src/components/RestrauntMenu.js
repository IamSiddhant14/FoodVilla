import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./constants";
import Shimmer from './Shimmer';

const RestrauntMenu = () => {

  const ans = useParams();
  // console.log(ans.id)

  useEffect(() => {
    getRestaurantInfo();

    const id = setInterval(()=>{
      console.log("Set interval running in RestaurantMenu component ")
     }, 1000)
 
     return () => {
       console.log("component will unmount ");
       clearInterval(id)
     }

  }, []);

  const [restaurant, setRestaurant] = useState({});

  async function getRestaurantInfo() {

    const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + ans.id );

    const json = await data.json();

    setRestaurant(json.data);

  }

  // Early return 
  // if( !restaurant ){
  //   return <Shimmer/>
  // }

  return (!restaurant?.menu) ? (<Shimmer />): (

    <div className="menu" >

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
