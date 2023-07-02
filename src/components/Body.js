import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
// import { filterData } from '../utils/helper'
import useOnline from '../utils/useOnline';
import { useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import RestaurantCard from "./RestaurantCard";






const Body = () => {

    // Here searchText is local state variable
    // Here argument is default variable , here searchInput is the variable and setSearchInput is a function which is used to modifie searchText
    // useState gives us an array of a variable and a function to update it 

    const [searchInput, setSearchInput] = useState("");

    const [allRestaurants, setAllRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [clicked, setClicked] = useState('Search');

    const { user, setUser } = useContext(UserContext);


    useEffect(() => {
        getRestaurants();
    }, [])


    async function getRestaurants() {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1603516&lng=77.45585539999999&page_type=DESKTOP_WEB_LISTING"
            
        );

        const json = await data.json();

        // NEW

        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

        // console.log((json?.data?.cards[2]?.data?.data?.cards))

        // OLD

        // setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
        // setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if (isOnline == false) {
        return <h1>🔴 Offline, please check your internet connection!!</h1>;
    }


    // Every component in react maintain a state and we could put all variable in that state  ,when we create a local varible we use state in it 

    // This is called early return 
    // if (!allRestaurants) return null;

    function filterData(input, rest) {

        const ans = rest.filter((re) => {

            return re?.data?.name?.toLowerCase().includes(input.toLowerCase());

        })

        return ans;
    }
    
    // console.log(allRestaurants)
    
    return allRestaurants.length == 0 ? <Shimmer /> : 

    <>

            <div className="p-5 bg-gray-300 m-4 rounded ">

                <input type="text" className=" shadow-lg rounded-lg bg-white p-2 focus:outline-none" placeholder="  Search" value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <button className="rounded-full ml-5 shadow-lg bg-white p-2" onClick={(e) => {

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




                }}><i className="fa fa-search"></i> {clicked}</button>

                <input type="text" className=" shadow-lg rounded-lg bg-white p-2 ml-4 focus:outline-none" placeholder="  useContext" value={user.name} onChange = {(e)=> setUser({name:e.target.value, email: e.target.value +"@gmail.com"}) }/>

                <h1 className="text-center">{user.email}</h1>
                {/* onClick will call the setClicked varible when it is been clicked */}

                
            </div>

            <div className='flex flex-wrap'>

                {
                    filteredRestaurants.length === 0 ? <h1>No Restaurant Match Your Search<Shimmer/></h1> :

                        filteredRestaurants.map((restaurant) => {

                            return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>

                                <RestaurantCard {...restaurant.data} /> 

                                
                            </Link>


                            // return <RestaurantCard {...restaurant.data}
                            // />
                        })
                }

            </div>

    </>

    
}

export default Body;