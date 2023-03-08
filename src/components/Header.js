import { IMG_TITLE } from "./constants"

const Title = () => {
    return (
        <a href="/">

            <img className="logo" alt="logo" src={IMG_TITLE} />
        </a>
    )
}

const Header = () => {

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

        </div>

    )
}


export default Header ;