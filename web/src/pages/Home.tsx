import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/home.css';

import logoImg from '../images/logo.svg';

const Home: React.FC = () => (
  <div id="page-home">
    <div className="content-wrapper">
      <img src={logoImg} alt="Logo da plataforma SOS" />

      <main>
        <h1>Leve motivação para o mundo</h1>
        <p>Ajude alguem a se motivar contando um pouco sobre você.</p>
      </main>

      <Link to="/register" className="enter-app">
        Ajudar
      </Link>
    </div>
  </div>
);

export default Home;
