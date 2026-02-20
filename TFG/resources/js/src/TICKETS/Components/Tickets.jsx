import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/NavBars/NavBar";
import { HelperTicketsContext } from "../Helper/HelperTickets";
import Footer from "../../Components/Footer/Footer";
import { HelperModalContext } from "../../Components/Modal/Helper/HelperModal";


function Tickets() {
    const { tickets } = useContext(HelperTicketsContext);
    const { addTicket } = useContext(HelperModalContext);
    return (
        <>
            <Navbar />

            {/* <!-- Tickets Section --> */}
            <section className="tickets-section">
                <div className="container">
                    <div className="tickets-grid">
                        {/* Cambiar a formato de arriba */}
                        {tickets.map((elemento, indice) => {
                            return (
                                <div className="ticket-card" key={indice}>
                                    <h1 className="ticket-title">
                                        {elemento.categoria}
                                    </h1>
                                    <div className="ticket-price">
                                        <span className="price-amount">
                                            {elemento.precio}€
                                        </span>
                                        <span className="price-period">
                                            + gastos de gestión
                                        </span>
                                    </div>
                                    <ul className="ticket-features">
                                        <li>{elemento.descripcion}</li>
                                    </ul>
                                    <button
                                        className="ticket-btn"
                                        onClick={() => addTicket(elemento)}
                                    >
                                        Comprar Ahora
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* <!-- Info Section --> */}
                    <div className="tickets-info">
                        <h2 className="tickets-info-title">
                            Información Importante
                        </h2>
                        <div className="tickets-info-grid">
                            <div className="info-item">
                                <h3>📅 Fechas</h3>
                                <p>1-4 Julio 2026</p>
                            </div>
                            <div className="info-item">
                                <h3>📍 Ubicación</h3>
                                <p>Recinto Hellborn, Viveiro</p>
                            </div>
                            <div className="info-item">
                                <h3>🎫 Venta</h3>
                                <p>Limitado a 50.000 personas</p>
                            </div>
                            <div className="info-item">
                                <h3>🔞 Edad</h3>
                                <p>+18 años o acompañado</p>
                            </div>
                        </div>
                        <div className="tickets-terms">
                            <p>
                                <strong>Condiciones:</strong> Las entradas son
                                nominales e intransferibles. Los precios
                                incluyen IVA. Los gastos de gestión se añadirán
                                al finalizar la compra. No se admiten
                                devoluciones excepto en caso de cancelación del
                                evento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Tickets;
