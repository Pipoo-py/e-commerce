import React from "react";
import "../stylesheets/NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { useGlobalState } from "./GlobalStateForProducts";
import { useStateForViewCar } from "./GlobalStateForViewCarShop";
import { useContextForTotalProducts } from "./GlobalStateForTotalProducts";
import { ProductPreview } from "./ProductPreview";

const NavBar = ()=>{
    const [ viewMenu, setViewMenu ] = useState(false);
    const { state } = useGlobalState();
    const { setView } = useStateForViewCar();
    const { totalProducts } = useContextForTotalProducts();
    const [ input, setInput ] = useState("");
    const [ viewSearchDiv, setViewSearchDiv ] = useState(false);

    const changeStateForInput = userInput =>{
        setInput(userInput);
    }

    return(
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo-container">
                    <h1>E-commerce</h1>
                </div>
                <div className="nav__input-container">
                    <input type="text" placeholder="Escriba el producto aquí para buscarlo"
                    defaultValue=""
                        onChange={(e)=> changeStateForInput(e.target.value)}
                        onClick={()=> setViewSearchDiv(!viewSearchDiv)}
                    id="inputSearchItem"/>
                </div>
                <div className="nav__mobile-menu-container">
                    <AiOutlineMenu onClick={()=> setViewMenu(!viewMenu)} className="menu-icon"/>
                </div>
                {
                    viewMenu ? (
                        <div className="nav__links-container">
                            <ul className="nav__list">
                                <li className="nav__item" >
                                    <Link to="/" className="nav__link" onClick={() => setViewMenu(false)}>Inicio</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/about" className="nav__link" onClick={() => setViewMenu(false)}>Acerca de </Link>
                                </li>
                                <li className="nav__item">
                                    <div className="nav__link --carshop-icon" onClick={()=>{ setView(true); setViewMenu(!viewMenu)}}>
                                        <AiOutlineShoppingCart />
                                        <span>{state.length}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ) : null
                }
            </div>
            {
                viewSearchDiv ? (
                    <div className="user-search-container">
                {
                    totalProducts.map(product=>
                        product.title.toLowerCase().trim().includes(input.toLowerCase().trim()) ? (
                        <>
                            <button onClick={() => setViewSearchDiv(!viewSearchDiv)}><AiOutlineClose /></button>
                            <ProductPreview 
                                image = {product.image}
                                title = {product.title}
                                description = {product.description}
                                price = {product.price}
                                allInfo = {{
                                    image: product.image,
                                    title: product.title,
                                    description: product.description,
                                    price: product.price
                                }}
                                clickInProduct = {() => null}
                        />
                        </>
                    ) : null
                    )
                }
            </div>
                ): null
            }
        </nav>
    );
}

export default NavBar;