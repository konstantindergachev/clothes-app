import React from 'react';
import Login from '../../components/auth-components/login/Login';
import Register from '../../components/auth-components/register/Register';
import './AuthPage.scss';

const AuthPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Register />
    </div>
  );
};

export default AuthPage;
