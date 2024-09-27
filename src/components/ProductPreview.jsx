import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../stylesheets/ProductPreview.css";
import { useGlobalState } from "./GlobalStateForProducts";
import { useState } from "react";


export const ProductPreview = props=>{
    const { state, dispatch } = useGlobalState();
    const [ viewWarning, setViewWarning ] = useState(false);

    return(
        <div className="product__container">
            <div className="product__img-container" onClick={props.clickInProduct}>
                <img src={props.image} alt=""/>
            </div>
            <div className="product__info-container">
                <h4>{props.title}</h4>
                <h3>{props.price}$</h3>
            </div>
            <div className="product__add-container">
                <button
                onClick={()=> {
                    dispatch({
                        type: "addProduct",
                        product: {
                            title: props.title,
                            image: props.image,
                            price: props.price,
                            description: props.description
                        }
                    });
                    setViewWarning(true);
                    setTimeout(()=> setViewWarning(false), 2000)
                }}
                >Añadir al carrito <AiOutlinePlus /></button>
            </div>

            {
                viewWarning ? <span className="warning"> Producto agregado al carrito correctamente </span> : null
            }
        </div>
    );
}