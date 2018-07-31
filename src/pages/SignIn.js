import React from 'react';

const SignIn = () => {
    return(
        <div className="container margin-auto">
            <div className="panel small-padding white-bg small-margin-top">
                <label>Usuario:</label>
                <input type="text" />
                <label>Email:</label>
                <input type="password" />
                <button className="button primary">Iniciar Sesión</button>
            </div>
        </div>
    );
}

export default SignIn;
