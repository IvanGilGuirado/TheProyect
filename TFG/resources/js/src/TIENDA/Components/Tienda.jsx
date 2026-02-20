import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/NavBars/NavBar'
import { HelperTiendaContext } from '../Helpers/HelperTienda'
import Footer from '../../Components/Footer/Footer'
import { getMerch } from '../API/api'
import { HelperModalContext } from '../../Components/Modal/Helper/HelperModal'


function Tienda() {

    const { merch } = useContext(HelperTiendaContext)
    const { setCategoriaActiva } = useContext(HelperTiendaContext)
    const { addMerch } = useContext(HelperModalContext)

    return (
        <>
            <Navbar />

            {/* <!-- Products Section --> */}
            <section className="shop-section">
                <div className="container">
                    {/* <!-- Categories --> */}
                    <div className="shop-categories">
                        <button className="category-btn " onClick={() => setCategoriaActiva("all")}>
                            Todos
                        </button>
                        <button className="category-btn" onClick={() => setCategoriaActiva("camiseta")}>
                            Camisetas
                        </button>
                        <button className="category-btn" onClick={() => setCategoriaActiva("Sudadera")} >
                            Sudaderas
                        </button>
                        <button className="category-btn" onClick={() => setCategoriaActiva("accesorio")}>
                            Accesorios
                        </button>
                        <button className="category-btn" onClick={() => setCategoriaActiva("vinilos")} >
                            Vinilos
                        </button>
                    </div>


                    <div className="products-grid">


                        {merch.map((elemento, indice) => {
                            return (
                                <div className="product-card" key={indice}>
                                    <div className='product-image'>
                                        <img src={elemento.urlImg} alt="" />
                                    </div>

                                    <div className='product-info'>
                                        <h3 className="product-name">{elemento.nombre}</h3>
                                        <p className="product-price">{elemento.precio}</p>
                                        <button className="product-btn" onClick={() => addMerch(elemento)}>Añadir al Carrito</button>
                                    </div>

                                </div>
                            )
                        })}


                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Tienda