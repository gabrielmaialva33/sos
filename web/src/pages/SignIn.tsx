import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/signin.css';

import logoImg from '../images/logo.svg';

const SignIn: React.FC = () => {
  return (
    <div id="page-signin">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo da plataforma SOS" />

        <main>
          <h1>Faça seu logon</h1>
        </main>

        <div className="input-logon">
          <label htmlFor="name">Seu código</label>
          <input id="name" placeholder="Ex: E4RCS9" />
        </div>
        <button className="button-logon" type="submit">
          Entrar
        </button>

        <Link to="/register" className="back-link">
          <button className="back-button">
            <FiArrowRight size="30" color="#fff" />
          </button>
          Não tenho cadastro
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
