import { restrautList } from "./constants";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom'
import { filterData } from '../utils/helper'
import useOnline from '../utils/useOnline'
import { useState, useEffect } from "react";


const RestaurantCard = (props) => {

    // const RestaurantCard = ({ name , star , cus }) => {

    // const RestaurantCard = ({ a , b, c, d }) => // Here a , b, c, d should be of the exact same name as of the keys 
    // {    < RestaurantCard {...RestaurantCard} />

    // const RestaurantCard = ({passingProps , key}) => {

    // const { a , b, c, d : f} = passingProps; we could further destrure as well

    // console.log(props.passingProps);

    const { name, star, cus, img, cost, maxDeliveryTime } = props;
    // const { name , star , cuisines } = props;

    return (
        <div class='h-96 w-600 m-4 rounded-xl bg-slate-200 flex flex-col items-start pl-2 shadow-lg'>
            <img class='bg-cyan-800 shadow-lg shadow-cyan-500/100 h-40 m-4 text-2xl rounded-xl' src={IMG_CDN_URL + img} />
            <h2 style={{ padding: '4px', color: "black", backgroundColor: "white", borderRadius: 10 }}>{name}</h2>
            <h3 class="pt-2">{cus.slice(0, 3).join(" , ")}</h3>
            <h4 class="pt-2"> ★ {star}</h4>
            <h4 class="pt-2"> {cost}</h4>
            <h4 class="pt-2" > {maxDeliveryTime}</h4>
        </div>
    )
}


const Body = () => {



    // Here searchText is local state variable
    //Here argument is default variable , here searchInput is the variable and setSearchInput is a function which is used to modifie searchText
    // useState gives us an array of a variable and a function to update it ff

    const [searchInput, setSearchInput] = useState("");

    const [allRestaurants, setAllRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [clicked, setClicked] = useState('Search');



    useEffect(() => {
        getRestaurants();
    }, [])


    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1603516&lng=77.45585539999999&page_type=DESKTOP_WEB_LISTING"


        );

        const json = await data.json();

        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);

        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }


    const isOnline = useOnline();

    if (isOnline == false) {
        return <h1>🔴 Offline, please check your internet connection!!</h1>;
    }


    // This is called early return 
    if (!allRestaurants) return null;


    return allRestaurants?.length === 0 ? (<Shimmer />) : (

        <>
            {
                /*
                
                Every component in react maintain a state and we could put all variable in that state  ,when we create a local varible we use state in it 
    
                */
            }

            <div className="p-5 bg-gray-300 m-4 rounded ">

                <input type="text" className=" shadow-lg rounded-lg bg-white p-2 " placeholder="  Search" value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <button class="rounded-full ml-5 shadow-lg bg-white p-2" onClick={(e) => {

                    if (clicked === 'Search') {

                        setClicked('Searching')

                        const data = filterData(searchInput, allRestaurants);

                        setFilteredRestaurants(data);

                        setTimeout(() => {
                            setClicked('Search');
                            setSearchInput("");


                        }, 3000)

                    } else {
                        setClicked('Search')
                    }




                }}><i class="fa fa-search"></i> {clicked}</button>
                {/* onClick will call the setClicked varible when it is been clicked */}
            </div>

            <div className='flex flex-wrap'>

                {
                    filteredRestaurants?.length === 0 ? <h1>No Restaurant Match Your Search</h1> :





                        filteredRestaurants.map((restaurant) => {

                            return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>

                                <RestaurantCard name={restaurant.data.name} star={restaurant.data.avgRating}
                                    cus={restaurant.data.cuisines}
                                    img={restaurant.data.cloudinaryImageId}
                                    cost={restaurant.data.costForTwoString}
                                    maxDeliveryTime={restaurant.data.slaString}

                                />
                            </Link>


                            // return <RestaurantCard {...restaurant.data}
                            // />


                        })
                }

            </div>

        </>

    )
}

export default Body;