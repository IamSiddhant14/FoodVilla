import { restrautList } from "./constants";
import { IMG_CDN_URL }from "./constants";
import { useState } from "react";

const RestaurantCard = (props) => {

    // const RestaurantCard = ({ name , star , cus }) => {
    
        // const RestaurantCard = ({ a , b, c, d }) => // Here a , b, c, d should be the exact name of the keys 
        // {    < RestaurantCard {...RestaurantCard} />
         
        // const RestaurantCard = ({passingProps , key}) => {
    
        // const { a , b, c, d : f} = passingProps; we could further destrure as well
    
        // console.log(props.passingProps);
    
        const { name , star , cus , img  } = props;
        // const { name , star , cuisines } = props;
    
        return (
            <div className='card'>
                <img src={ IMG_CDN_URL +img} />
                <h2 style={{ color: "red", backgroundColor: "yellow" }}>{name}</h2>
                <h3>{cus.join(" , ")}</h3>
                <h4>{star}</h4>
            </div>
        )
}

function filterData( input , rest ){
    const ans = rest.filter((re) => {
       return  re.data.name.includes(input);
    })

    return ans;
}

const Body = () => {

// Here searchText is local state variable
//Here argument is default variable , here searchInput is the variable and setSearchInput is a function which is used to modifie searchText
// useState gives us an array of a variable and a function to update it ff

 const[searchInput , setSearchInput ] = useState("");
 const [restaurants, setRestaurants] = useState(restrautList);

 const[clicked , setClicked ] = useState('Search')

    return (
 
        <>
        {
            /*
            
            Every component in react maintain a state and we could put all variable in that state  ,when we create a local varible we use state in it 

            */
        }
        
            <div className="search-container">

                <input type="text" className="search-input" placeholder="Search" value={searchInput}
                onChange={(e) => setSearchInput(e.target.value) }
                
                />
            
                <button className="search-btn" onClick={(e) => {
                    
                    if( clicked === 'Search' ){
                        setClicked('Searching')
                        const data = filterData(searchInput , restaurants );

                        setRestaurants(data);
                        setTimeout(()=> {
                          setClicked('Search');
                        //   setSearchInput("");
                          

                        }, 3000)

                    }else{
                        setClicked('Search')
                    }

 
                    
                    
                }}>{clicked}</button>
{/* onClick will call the setClicked varible when it is been clicked */}
            </div>
            
            <div className='restaurant-list'>

                {
                   restaurants.map((restaurant)=> {
                     
                    
                    return <RestaurantCard name={restaurant.data.name} star={restaurant.data.avgRating} 
                    cus={restaurant.data.cuisines} 
                    img={restaurant.data.cloudinaryImageId}
                    key={restaurant.data.uuid}
                    />

                    // return <RestaurantCard {...restaurant.data}
                    // />


                   })
                }
                
            </div>

        </>

    )
}

export default Body;