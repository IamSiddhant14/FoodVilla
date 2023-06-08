
import { IMG_CDN_URL } from "./constants";

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
        <div className='h-96 w-600 m-4 rounded-xl bg-slate-200 flex flex-col items-start pl-2 shadow-lg'>
            <img className='bg-cyan-800 shadow-lg shadow-cyan-500/100 h-40 m-4 text-2xl rounded-xl' src={IMG_CDN_URL + img} />
            <h2 style={{ padding: '4px', color: "black", backgroundColor: "white", borderRadius: 10 , wordBreak:'break-word' , width: '280px' , textAlign:'center'}}>{name}</h2>
            <h3 className="pt-2">{cus.slice(0, 3).join(" , ")}</h3>
            <h4 className="pt-2"> ★ {star}</h4>
            <h4 className="pt-2"> {cost}</h4>
            <h4 className="pt-2" > {maxDeliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard ;