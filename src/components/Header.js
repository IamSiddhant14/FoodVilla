import img from '../assets/foodvilla.png';
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useState , useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Title = () => {
    return (
        <Link  to="/">
            <img className="h-28 m-2  rounded-full bg-slate-200  " alt="logo" src={img} />
        </Link>
    )
}

const authenticateUser = () => {
    return 'true';
}

const Header = () => {

    const [toggle, setToggle] = useState('login');

    const isOnline = useOnline();

    const {user
    } = useContext(UserContext);
    console.log( user);

    const cartItems = useSelector((store) => store.cart.items );
    
    return (

        <div className='flex justify-between bg-gray-200'>

            <Title  />
            {/* { Title() } */}

            <div className='flex flex-col items-center'>

                <ul className="flex pt-4 ">

                    <li className=" ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"><Link to="/">Home</Link></li>

                    <li className="ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"><Link to="/about">About</Link></li>


                    <li className="ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"
                    > <Link to="/cart">🛒{cartItems.length}</Link></li>

                    <li className="ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"> <Link to="/instamart">Mart</Link></li>


                </ul>

                <h1 className="pt-5 shadow-lg'" >{isOnline ? "✅Online " : "🔴Offline"}</h1>

            </div>

            <button className="rounded-full shadow-lg' m-5 mt-10 px-8 h-10 bg-white p-2" onClick={(e) => {

                if (toggle == 'login') {
                    setToggle('logout')

                } else {
                    setToggle('login')
                }

            // }}>{  toggle}</button>
            }}>{  user.name+toggle}</button>

        </div>

    )
}


export default Header;