import React from 'react';

const Navbar = ({isTransparent}) => {
    return(
        <div className={`navbar ${!isTransparent ? "gradient-bg" : ''}`}>
            <div className="container margin-auto flex justify-between align-items-center small-padding">
                <a href="/">
                    <h2 className="white-text-color">TANDITAPP</h2>
                </a>
                <div className="white-text-color">
                    <a href="/sign_in" className="small-margin-right">Iniciar Sesión</a>
                    <a href="/sign_in">Registrarse</a>
                </div>
            </div>
        </div>
    );
};


export default Navbar;
