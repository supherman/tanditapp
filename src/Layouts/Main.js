import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = ({ children, isLoggedIn = false, isAdmin = false }) => {
  return (
    <div className="layout">
      <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
