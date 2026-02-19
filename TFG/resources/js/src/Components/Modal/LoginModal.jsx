import React from 'react'
import "./modal.css"
import { Link } from "react-router-dom";
function LoginModal() {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="modal-title">INICIAR SESIÓN</h2>

          <form className="modal-form">
            <input
              type="email"
              placeholder="Email"
              className="modal-input"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="modal-input"
            />

            <button className="modal-button">
              ACCEDER
            </button>
          </form>

          <p className="modal-footer">
            ¿No tienes cuenta? <Link  className="modal-button" to="/register">Regístrate</Link>
            <Link className="modal-button" to="/"> Volver</Link>
          </p>
        </div>
      </div>

    </>
  )
}

export default LoginModal