import { useContext  } from "react";
import {Link } from 'react-router-dom'
import UserContext from "../utils/UserContext";

const Footer = () => {

const{user} = useContext(UserContext);

    return (
        <h4 className="text-center font-semibold mb-3">This site is Been developed
        {/* And maintained <Link to='https://github.com/IamSiddhant14'>⚡Siddhant⚡</Link></h4> */}
        And maintained <Link to='https://github.com/IamSiddhant14'>⚡{user.name}⚡</Link></h4>
    )
}

export default Footer ;