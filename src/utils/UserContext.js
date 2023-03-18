import { createContext } from "react";

const UserContext = createContext({

        name: 'Siddhant ',
        email: "siddhantsharma669@gmail.com"
    
});


UserContext.displayName = 'Usercontext';

export default UserContext;
