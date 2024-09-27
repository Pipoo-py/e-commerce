import React from "react";
import { useGlobalState } from "./GlobalStateForProducts";
import { AiOutlineClose, AiOutlineDelete, AiOutlineCheckCircle } from "react-icons/ai";
import "../stylesheets/ModalCarShop.css";
import { useStateForViewCar } from "./GlobalStateForViewCarShop";
import { Link } from "react-router-dom";
import {  useEffect } from "react";
import { useContextForTotalPrices } from "./GlobalStateTotalPrice";

export const ModalCarShop = ()=>{
    const { state, dispatch } = useGlobalState();
    const { view, setView } = useStateForViewCar();
    const { price, setPrice } = useContextForTotalPrices();

    useEffect(()=>{
        let price = 0;
        state.map(product=>
            price += product.price
        )
        setPrice(price);
    },[ state ])

    if (!view) return null;

    return (
            <div className = "modal__container">
                <button className="close-modal"><AiOutlineClose className="close-icon" onClick={()=> setView(false)}/></button>
                <h2 className="modal-title">
                    Productos en el carrito
                </h2>
                {
                    state.length <= 0 ? <span> Vacío </span> : (
                        <ul className="products__list">
                            { 
                                state.map(product=>
                                    <li>
                                        <div className="product__item">
                                            <img src={product.image} alt={product.title}/>
                                            <h4>{product.title}</h4>
                                            <span>{product.price}$</span>
                                            <button className="button-delete-product"><AiOutlineDelete onClick={()=> dispatch({
                                                type: "deleteProduct",
                                                title: product.title
                                            })} className="delete-icon"/></button>
                                        </div>
                                    </li>
                                ) 
                            }
                        </ul>
                    )
                }
                
                {
                    price <= 0 ? null : (
                    <>
                        <span> { price }$ </span>
                        <button className="pay-button"> <Link to="/pay" className="button-link"> Comprar productos <AiOutlineCheckCircle /> </Link></button>
                    </>
                )}
            </div>
    )
}