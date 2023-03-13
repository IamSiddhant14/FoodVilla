import { IMG_TITLE } from "./constants"
import { useState } from "react";
import img from '../assets/foodvilla.png';
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";


const Title = () => {
    return (
        <a href="/">

            <img className="h-28 m-2 rounded-full bg-slate-200  " alt="logo" src={img} />
        </a>
    )
}

const authenticateUser = () => {
    return 'true';
}


const Header = () => {

    const [toggle, setToggle] = useState('login');

    const isOnline = useOnline();

    return (

        <div className='flex justify-between bg-gray-200'>
            <Title  />

            <div className='flex flex-col items-center'>

                <ul className="flex pt-4 ">

                    <li className=" ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"><Link to="/">Home</Link></li>

                    <li className="ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"><Link to="/about">About</Link></li>

                    <li className="ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"> <Link to="/contact">Contact</Link></li>

                    <li className="ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"
                    > <Link to="/cart">Cart</Link></li>

                    <li className="ml-10 py-6 hover:scale-150 ease-out duration-500 hover:font-semibold hover:uppercase"> <Link to="/instamart">Instamart</Link></li>


                </ul>

                <h1 className="pt-5 shadow-lg'" >{isOnline ? "✅Online " : "🔴Offline"}</h1>

            </div>

            <button class="rounded-full shadow-lg' m-5 mt-10 px-8 h-10 bg-white p-2" onClick={(e) => {

                if (toggle == 'login') {
                    setToggle('logout')

                } else {
                    setToggle('login')
                }

            }}>{toggle}</button>

        </div>

    )
}


export default Header;