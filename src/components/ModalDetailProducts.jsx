import React from "react";
import "../stylesheets/ModalDetailProducts.css";
import { AiOutlineClose,AiOutlinePlus } from "react-icons/ai";
import { useGlobalState } from "./GlobalStateForProducts";

export const ModalDetailProducts = ({ image, description, title, price, closeModal })=>{
    const { state, dispatch } = useGlobalState();
    return(
        <div className= "Modal__detail-bg">
            <button className = "Modal__detail-button" onClick={closeModal}>
                <AiOutlineClose className = "Modal__close-icon"/>
            </button>
            <div className = "Modal__container">
                <h2>{ title }</h2>
                <div className = "Modal__content">
                    <img src={ image } alt={ title } />
                    <h3>{ price }$</h3>
                    <p>
                        { description }
                    </p>
                    <div className="product__add-container">
                    <button
                        onClick={()=> dispatch({
                            type: "addProduct",
                            product: {
                                title,
                                image,
                                price,
                                description
                            }
                        })}
                >Añadir al carrito <AiOutlinePlus /></button>
            </div>
                </div>
            </div>
        </div>
    )
}