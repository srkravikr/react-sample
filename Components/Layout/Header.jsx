import React from 'react';
import Navigation from './Navigation';



const Header = () => {
  return(

    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navigation/>

        </nav>
      </div>
    </header>
  )
}

export default Header;