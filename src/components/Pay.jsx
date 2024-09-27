import React from "react";
import { useContextForTotalPrices } from "./GlobalStateTotalPrice";
import "../stylesheets/Pay.css";
import { useState } from "react";

export const Pay = ()=>{
    const { price } = useContextForTotalPrices();
    const [ validation, setValidation ] = useState(null);

    const checkInfo = (event)=>{
        console.log(event.target.children[1].value)
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const addressRegex = /^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ.,#\-\s]{5,100}$/;
        if(nameRegex.test(event.target.children[1].value) != true || nameRegex.test(event.target.children[2].value) != true ){
            setValidation("Verifique el nombre o el apellido.");
        }
        else if( emailRegex.test(event.target.children[3].value) != true ){
            setValidation("Correo inválido");
        }

        else if( addressRegex.test(event.target.children[4].value) != true){
            setValidation("Dirección Inválida");
        }

        else{
            setValidation("Los datos son válidos, se procesará el pago");
        }
    }

    return(
        <div style={{ height: "90dvh"}}>
        <div className = "pay__container">
            <h2> Pague de forma segura</h2>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                checkInfo(e);
            } } id="payForm" name="payForm">
                <span> Total de dinero a pagar: { price }$</span>
                <input type="text" placeholder="Escriba su nombre" required/>
                <input type="text" placeholder="Escriba su apellido" required/>
                <input type="email" placeholder="Escriba su correo "required/>
                <input type="text" placeholder="Escriba su dirección" required/>
                <span style={{
                    fontSize: ".7rem"
                }}> { validation } </span>
                <input type="submit" value="Comprar"/>
            </form>
        </div>
        </div>
    )
}