import React from "react";
import { useState, useEffect, useReducer } from "react";
import { ProductPreview } from "./ProductPreview";
import { ModalDetailProducts } from './ModalDetailProducts';
import { useContextForTotalProducts } from "./GlobalStateForTotalProducts";

export const ListProducts = ()=>{

    const { totalProducts, setTotalProducts } = useContextForTotalProducts();
    const [ loading, setLoading ] = useState(false);
    const [ clickAnyProduct, setClickAnyProduct ] = useState(null);

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
        requestProducts();
    },[]);

    const viewModal = (product)=>{
        setClickAnyProduct(product);
    }

    return(
        <>
            <div className = "list-products">
                {
                loading == false ? <span>Cargando...</span> : (
                    totalProducts[0] === "error" ? <span> Ocurrió un error, por favor verifique su conexión a internet</span> : (
                        totalProducts.map(product=>
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
                                key = { product.title }
                                clickInProduct = {() => viewModal(product)}
                        />
                    )
                )
            )
            }
            </div>

            {
                clickAnyProduct && 
                <ModalDetailProducts 
                    image={clickAnyProduct.image} 
                    title={clickAnyProduct.title} 
                    description={clickAnyProduct.description} 
                    price={clickAnyProduct.price} 
                    closeModal={()=> setClickAnyProduct(null)} 
                />
            }
        </>
    )
}