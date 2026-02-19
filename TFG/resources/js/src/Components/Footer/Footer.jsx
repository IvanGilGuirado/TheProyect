import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        {/* <!-- Logo y descripción --> */}
                        <div className="footer-section">
                            <img src="logo.webp" alt="Hellborn Fest" className="footer-logo" />
                            <p className="footer-description">
                                El festival de metal más intenso del año. 1-4 Julio 2026.
                            </p>
                        </div>

                        {/* <!-- Enlaces rápidos --> */}
                        <div className="footer-section">
                            <h3 className="footer-title">Enlaces</h3>
                            <ul className="footer-links">

                                <li> <Link to="/Routes" className="nav-link">Route HF</Link> </li>
                                <li> <Link to="/Tienda" className="nav-link">Tienda</Link></li>
                                <li><Link to="/Tickets" className="nav-link-tickets">Tickets</Link></li>

                            </ul>
                        </div>

                        {/* <!-- Contacto --> */}
                        <div className="footer-section">
                            <h3 className="footer-title">Contacto</h3>
                            <ul className="footer-links">
                                <li>
                                    <a href="mailto:info@hellbornfest.com">info@hellbornfest.com</a>
                                </li>

                            </ul>
                        </div>

                        {/* <!-- Redes sociales --> */}
                        <div className="footer-section">
                            <h3 className="footer-title">Síguenos</h3>
                            <div className="footer-social">
                                <a href="#" className="social-icon" aria-label="Facebook">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className="social-icon" aria-label="Instagram">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path
                                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                        ></path>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="#" className="social-icon" aria-label="Twitter">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className="social-icon" aria-label="YouTube">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                                        ></path>
                                        <polygon points="10 15 15 12 10 9 10 15"></polygon>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Copyright --> */}
                    <div className="footer-bottom">
                        <p>&copy; 2026 Hellborn Fest. Todos los derechos reservados.</p>
                        <div className="footer-legal">
                            <a href="#privacidad">Política de Privacidad</a>
                            <span>•</span>
                            <a href="#terminos">Términos y Condiciones</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
