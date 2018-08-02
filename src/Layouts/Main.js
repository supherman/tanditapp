import React, { Fragment} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = ({children}) => {
    return(
        <div className="layout">
            <Navbar />
            <div className="content small-padding">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Main;
