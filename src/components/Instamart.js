import { useState } from "react";
import { PARA } from "./constants";

const Section = ({ title, des }) => {

  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="border-2 border-black m-4 p-2">
      <h1 className="text-3xl" >{title}</h1>
      
      { isVisible ? <p className="italic" >{des}</p> : <span/>}
      
      <button className="font-extrabold underline underline-offset-" onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show More" }</button>
    </div>
  )
}

const Instamart = () => {
  return (
    <div>
      <h1 className="text-3xl m-5"> Instamart</h1>
      <Section title={"About Instamart"} des={PARA} />

      <Section title={"Team InstaMart"} des={PARA} />

      <Section title={"Carrers"} des={PARA}  />
    </div>
  )
}

export default Instamart
