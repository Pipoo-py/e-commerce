import React from "react";
import { useState, useEffect } from 'react';
import "../stylesheets/Home.css";
import "../stylesheets/ListProducts.css";
import { ListProducts } from './ListProducts';
import { ModalCarShop } from './ModalCarShop';
import { useContextForTotalProducts } from "./GlobalStateForTotalProducts";


export const Home = ()=>{

    const { totalProducts, setTotalProducts } = useContextForTotalProducts();
    const [imgIndex, setImgIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const requestProducts = async()=>{
            try{
                let request = await fetch('https://fakestoreapi.com/products/');
                let products = await request.json();
                setTotalProducts(products);
                setLoading(true);
            } catch(e){
                setTotalProducts(["error"]);
            }
        }
        requestProducts()
    },[]);

    useEffect(()=>{
        if(totalProducts.length === 0)return;

        const setIndexInterval = setInterval(()=> {
            setImgIndex(parseInt(Math.random()*totalProducts.length))
        }, 3000);

        return () => clearInterval(setIndexInterval);
    },[totalProducts]);

    return(
        <>
            <header className="header">
                <div className="header__container">
                    <h2>Principales productos</h2>
                </div>
                <div className="header__products-carousel">
                    {
                        loading == false ? <span> Cargando... </span>: (
                            totalProducts[0] == "error" ? <span>Ocurrió un error, verifique su conexión a internet</span>: (
                                <>
                                    <img src={totalProducts[imgIndex].image}></img>
                                    <h4>{totalProducts[imgIndex].title}</h4>
                                </>
                            )
                        )
                    }
                </div>
            </header>
            <ListProducts />
            <ModalCarShop />
        </>
    )
}