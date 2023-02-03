import React from 'react';
// import Navbar from '../navbar/Navbar';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {
                children
            }
            <Footer />
        </>
    )
}

export default Layout