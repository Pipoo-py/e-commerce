import React from "react";
import { createContext, useContext, useState } from "react";

const StateForViewCar = createContext();

export const GlobalStateForViewCar = ({ children })=>{
    const [view, setView] = useState(false);

    return(
        <StateForViewCar.Provider value={{view,setView}}>
            { children }
        </StateForViewCar.Provider>
    )
}

export const useStateForViewCar = ()=>{
    return useContext(StateForViewCar);
}