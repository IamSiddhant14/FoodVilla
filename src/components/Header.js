import { IMG_TITLE } from "./constants"
import { useState } from "react";
import img from '../assets/foodvilla.png';
import { Link } from 'react-router-dom';


const Title = () => {
    return (
        <a href="/">

            <img className="logo" alt="logo" src={img} />
        </a>
    )
}

const authenticateUser = () => {
    return 'true';
}


const Header = () => {

    const [toggle, setToggle] = useState('login')

    return (

        <div className='header'>
            <Title />

            <div className='nav-items'>

                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact us</Link></li>
                    <li> <Link to="/cart">Cart</Link></li>

                </ul>

            </div>

            <button className="btn" onClick={(e) => {

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