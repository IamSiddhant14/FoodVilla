import { IMG_CDN_URL } from "./constants";


const RestaurantCard = (props) => {
    // const RestaurantCard = ({ a , b, c, d }) => {   //  {...RestaurantCard}

    // const RestaurantCard = ({passingProps , key}) => {

    // const { a , b, c, d } = passingProps; we could further destrure as well

    console.log(props.passingProps);

    return (
        <div className='card'>
            <img src={IMG_CDN_URL} />
            <h2 style={{ color: "red", backgroundColor: "yellow" }}>Burger King</h2>
            <h3>Burger , American</h3>
            <h4>4.2 Stars</h4>
        </div>
    )
}


const Body = () => {

    return (

        <>
        
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value=""/>
                <button>Search</button>
            </div>
            
            <div className='restaurant-list'>
                <RestaurantCard key={1} passingProps={2}  {...RestaurantCard} />
            </div>

        </>

    )
}

export default Body;