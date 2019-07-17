import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'


const MainLayout = () => {
  return(

    <div>
      <Header />
      <Navigation/>
      <Footer />
    </div>
  )
}

export default MainLayout;