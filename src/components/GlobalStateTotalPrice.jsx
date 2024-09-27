import React from "react";
import { useState, createContext, useContext } from "react";

export const ContextForTotalPrice = createContext();

export const ComponentContextForTotalPrice = ( { children })=>{
    const [ price, setPrice ] = useState(0);

    return(
        <ContextForTotalPrice.Provider value={{ price,setPrice }}>
            { children }
        </ContextForTotalPrice.Provider>
    )
}

export const useContextForTotalPrices = ()=>{
    return useContext(ContextForTotalPrice);
}