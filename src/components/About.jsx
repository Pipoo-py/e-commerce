import React from "react";
import { AiFillCheckCircle, AiFillEye, AiFillInfoCircle, AiFillShop, AiFillSchedule, AiFillTruck, AiFillDollarCircle, AiFillPhone, AiFillMail, AiFillMessage } from "react-icons/ai";
import "../stylesheets/About.css";
import { ModalCarShop } from './ModalCarShop';
import { useStateForViewCar } from "./GlobalStateForViewCarShop";


export const About = ()=>{
    const { setView } = useStateForViewCar();
    return(
        <div className="about__container">
            <section className ="about-we__section">
                <h2> ¿Quiénes Somos? </h2>
                <p>
                    Somos una tienda online comprometida con ofrecer productos de calidad a precios competitivos. Nuestra misión es brindarte una experiencia de compra fácil y segura.
                </p>
            </section>
            <section className="history__section">
                <h2> Nuestra Historia </h2>
                <p>
                    Nacimos con la idea de revolucionar la compra online. Hemos crecido gracias a nuestro compromiso con la innovación y la satisfacción del cliente.
                </p>
            </section>
            <section className="values__section">
                <h2>
                    Valores que nos Guían
                </h2>
                <div className="values__grid">
                    <div className="value__item">
                        <AiFillCheckCircle className="value-icon"/>
                        <h4> Calidad </h4>
                        <span> Productos que cumplen los más altos estándares </span>
                    </div>
                    <div className="value__item">
                        <AiFillEye className="value-icon"/>
                        <h4> Transparencia </h4>
                        <span> Información clara y confiable. </span>
                    </div>
                    <div className="value__item">
                        <AiFillInfoCircle className="value-icon"/>
                        <h4> Innovación </h4>
                        <span> Siempre mejorando para ti. </span>
                    </div>
                    <div className="value__item">
                        <AiFillShop className="value-icon"/>
                        <h4> Servicio </h4>
                        <span> Tu satisfacción es nuestra prioridad. </span>
                    </div>
                </div>
            </section>
            <section className="why-us__section">
                <h2> ¿Por qué nosotros? </h2>
                <div className="why-us-grid">
                    <div className="why-us-item">
                        <h5> Pago Seguro </h5>
                        <AiFillSchedule className="why-us-icon"/>
                    </div>
                    <div className="why-us-item">
                        <h5> Envíos Rápido </h5>
                        <AiFillTruck className="why-us-icon"/>
                    </div>
                    <div className="why-us-item">
                        <h5> Devoluciones Fáciles </h5>
                        <AiFillDollarCircle className="why-us-icon"/>
                    </div>
                    <div className="why-us-item">
                        <h5> Atención Personalizada </h5>
                        <AiFillPhone className="why-us-icon"/>
                    </div>
                </div>
            </section>
            <section className="contact__section">
                <h2> Contáctanos </h2>
                <span>Si tienes preguntas, ¡estamos aquí para ayudarte!</span>
                <div className="contact__flex">
                    <ul>
                        <li>
                            <AiFillMail className="contact-icon"/>
                            <span> email@ecommerce.com </span>
                        </li>
                        <li>
                            <AiFillMessage className="contact-icon"/>
                            <span> +123 456 789 </span>
                        </li>
                    </ul>
                </div>
            </section>
            <ModalCarShop />
        </div>
    )
}