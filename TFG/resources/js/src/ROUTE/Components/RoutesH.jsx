import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/NavBars/NavBar'
import { RouteHelperContext } from '../Helpers/RouteHelper'
import Footer from './../../Components/Footer/Footer'

function RoutesH() {

  const { conciertos } = useContext(RouteHelperContext)
  console.log(conciertos);

  return (
    <>

      <Navbar />

      {/* <!-- Route Search Section --> */}
      <section className="route-search-section">
        <div className="container">
          <h1 className="route-main-title">ROUTE HELLBORN</h1>

          {/* <!-- Search Filters --> */}
          <div className="search-filters">
            <select className="filter-select" id="cityFilter">
              <option value="">CIUDAD</option>
              <option value="madrid">Madrid</option>
              <option value="barcelona">Barcelona</option>
              <option value="valencia">Valencia</option>
              <option value="sevilla">Sevilla</option>
              <option value="bilbao">Bilbao</option>
              <option value="zaragoza">Zaragoza</option>
              <option value="malaga">Málaga</option>
            </select>

            <input
              type="text"
              className="filter-input"
              id="searchInput"
              placeholder="BUSCAR POR TÍTULO"
            />

            <input type="date" className="filter-date" id="dateFilter" />

            {/* Funcion para filtrar eventos */}
            <button className="filter-button" >
              FILTRAR
            </button>
          </div>
        </div>
      </section>
      {/* 
          <!-- Events Grid --> */}
      <section className="events-section">
        <div className="container">
          <div className="events-grid" id="eventsGrid">

            {/* <!-- Event 1 --> */}
            <div className="event-card">
              <div className="event-image">
                <img
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Slayer"
                />
              </div>
              <div className="event-info">
                <h3 className="event-title">SLAYER</h3>
                <p className="event-subtitle">Farewell Tour</p>
                <p className="event-date">15.06.26</p>
                <p className="event-location">WiZink Center - Madrid</p>
              </div>
            </div>


            {/* Cambiar a formato de arriba */}
            {conciertos.map((elemento, indice) => {
              return (
                <div className='event-card' key={indice}>
                  <div className="event-image">

                  </div>

                  <div className="event-info">
                    <h3 className="event-title">{elemento.name}</h3>
                    <p className="event-subtitle">{elemento.email}</p>
                    <p className="event-date">15.06.26</p>
                    <p className="event-location">{elemento.phone}</p>
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

export default RoutesH