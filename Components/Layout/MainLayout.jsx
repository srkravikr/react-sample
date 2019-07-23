import React, {Fragment} from 'react';
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import Web from '../Web'

const MainLayout = () => {
  return(

    <Fragment>
      <Header />
      <Web/>
      <main >
      
      </main>
      
      <Footer />
    </Fragment>
  )
}

export default MainLayout;