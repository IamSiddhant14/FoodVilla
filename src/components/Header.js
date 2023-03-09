import { IMG_TITLE } from "./constants"
import { useState } from "react"

const Title = () => {
    return (
        <a href="/">

            <img className="logo" alt="logo" src={IMG_TITLE} />
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
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