import React from "react";
import { createContext, useState, useContext } from "react";

const stateOfTotalProducts = createContext();

export const GlobalStateTotalProducts = ( { children } )=>{
    const [ totalProducts, setTotalProducts ] = useState([]);

    return(
        <stateOfTotalProducts.Provider value = {{totalProducts, setTotalProducts}}>
            { children }
        </stateOfTotalProducts.Provider>
    )
}

export const useContextForTotalProducts = ()=>{
    return useContext(stateOfTotalProducts);
}