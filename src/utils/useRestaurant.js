import {
    useState, useEffect
} from "react";

import { FETCH_MENU_URL } from '../components/constants';

const useRestaurant = (resId) => {

    const [ restaurant , setRestaurant ] = useState(null);


    useEffect(() => {

     getRestaurantInfo();

    //  const fetch = async () => {
        
    //    const data = await fetch(FETCH_MENU_URL + resId + "&submitAction=ENTER");
    //    const json = await data.json();
      
    //    setRestaurant(json.data.cards);

    //  }

    //  getRestaurantInfo();
     
    }, [] );

    async function getRestaurantInfo(){

       const data = await fetch(FETCH_MENU_URL + resId + "&submitAction=ENTER");
       const json = await data.json();
      
       setRestaurant(json.data.cards);
       
    }
   
    return restaurant;
}

export default useRestaurant ;