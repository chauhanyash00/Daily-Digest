import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark height fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Daily Spark</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link to="/business" className='nav-link'> business</Link>
            <Link to="/entertainment" className='nav-link'> entertainment</Link>
            <Link to="/" className='nav-link'> general</Link>
            <Link to="/health" className='nav-link'> health</Link>
            <Link to="/science" className='nav-link'> sciencxe</Link>
            <Link to="/sports" className='nav-link'> sports</Link>
            <Link to="/technology" className='nav-link'> technology</Link>
            <Link to="/AboutUs" className='nav-link'> About Us</Link>
          </div>
        </div>
        <div>
          <label className="bb8-toggle">
            <input className="bb8-toggle__checkbox" type="checkbox"/>
            <div className="bb8-toggle__container">
              <div className="bb8-toggle__scenery">
                <div className="bb8-toggle__star"></div>
                <div className="bb8-toggle__star"></div>
                <div className="bb8-toggle__star"></div>
                <div className="bb8-toggle__star"></div>
                <div className="bb8-toggle__star"></div>
                <div className="bb8-toggle__star"></div>
                <div className="bb8-toggle__star"></div>
                <div className="tatto-1"></div>
                <div className="tatto-2"></div>
                <div className="gomrassen"></div>
                <div className="hermes"></div>
                <div className="chenini"></div>
                <div className="bb8-toggle__cloud"></div>
                <div className="bb8-toggle__cloud"></div>
                <div className="bb8-toggle__cloud"></div>
              </div>
              <div className="bb8">
                <div className="bb8__head-container">
                  <div className="bb8__antenna"></div>
                  <div className="bb8__antenna"></div>
                  <div className="bb8__head"></div>
                </div>
                <div className="bb8__body"></div>
              </div>
              <div className="artificial__hidden">
                <div className="bb8__shadow"></div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
