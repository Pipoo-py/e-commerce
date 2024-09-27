import React from "react";

export const Footer = ()=>{
    return(
        <footer className="footer__container" 
        style={{
            backgroundColor: "#2C3E50",
            padding: "24px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            color: "#fff"
        }}>
            <h2 style={{color: "#1ABC9C"}}> Desarrollado por Alejandro Salazar </h2>
            <p>
                Este "e-commerce" fué desarrollado con el objetivo de demostrar las habilidades del desarrollador, todos los productos mostrados son falsos y no está disponble un sistema de pago real.
            </p>
        </footer>
    )
}