import React from 'react';
import MainLayout from '../Layouts/Main';

const SignIn = () => {
  return (
    <MainLayout>
      <div className="container margin-auto">
        <div className="panel small-padding white-bg">
          <label>Usuario:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="password" />
          <button className="button primary">Iniciar Sesión</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
