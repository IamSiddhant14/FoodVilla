import { createContext } from "react";

const UserContext = createContext({

        user: {
                name: 'Siddhant ',
                email: "siddhantsharma669@gmail.com"
        }

});


UserContext.displayName = 'Usercontext'; // As react dont have name to it , it doesnt track it 

export default UserContext;
