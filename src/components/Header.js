import React from 'react'

const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid bg-faded padding-media">
      <div className="container padding-media">
        <nav className="navbar navbar-toggleable-md navbar-light">
          <button
            className="navbar-toggler mt-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            data-bs-parent="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle Navigation"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            
          >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"
                id ="navbarSupportedContent">
              
                <li class = "nav-item na-link">Home</li> 
                <li class = "nav-item na-link">Create</li> 
                <li class = "nav-item na-link">About</li> 
                
            </ul>
              <div className="row g-3">
                
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class = "nav-item na-link">Login</li> 
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </nav>
   
  );
};

export default Header
