import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({children, qBuy}) => {
  

  return (
    <>
      <NavBar qBuy={qBuy}/>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
