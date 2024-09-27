import React from "react";
import { createContext, useReducer, useContext } from "react";

const initialState = [];

const productsReducer = (state,action)=>{
    switch(action.type){
        case "addProduct":
            return [...state, action.product];

        case "deleteProduct":
            return state.filter(product => product.title != action.title);
        default:
            return state;
    }
}

const GlobalStateContext = createContext();

export const  GlobalStateProvider = ({ children })=> {
    const [state, dispatch] = useReducer(productsReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export function useGlobalState() {
    return useContext(GlobalStateContext);
}