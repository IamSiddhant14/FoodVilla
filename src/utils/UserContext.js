import { createContext } from "react";

const UserContext = createContext({


});

UserContext.displayName = 'Usercontext'; 
 // As react dont have name to it , it doesnt track it 

export default UserContext;
