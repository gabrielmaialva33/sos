import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/signup.css';

import logoImg from '../images/logo.svg';

const SignUp: React.FC = () => {
  return (
    <div id="page-signup">
      <div className="content-wrapper">
        <div className="card-wrapper">
          <img src={logoImg} alt="Logo da plataforma SOS" />

          <main>
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e motive pessoas a procurar
              conhecimento.
            </p>
          </main>

          <Link to="/" className="back-link">
            <button className="back-button">
              <FiArrowLeft size="30" color="#fff" />
            </button>
            Já tenho cadastro
          </Link>
        </div>

        <div className="card-form">
          <div className="content-form">
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" placeholder="Ex: Amanda Padilha" />
            </div>
            <div className="input-block">
              <label htmlFor="name">Email</label>
              <input id="name" placeholder="Ex: amandapadilha@gmail.com" />
            </div>
            <div className="input-block">
              <label htmlFor="name">Whatsapp</label>
              <input id="name" placeholder="Ex: 15996601743" />
            </div>
            <div className="input-block">
              <label htmlFor="name">Conhecimentos</label>
              <input id="name" placeholder="Ex: React, Node e Typescript" />
            </div>
            <div className="input-block">
              <label htmlFor="name">Bio</label>
              <textarea
                id="name"
                placeholder="Conte um pouco sobre você"
                maxLength={600}
              />
            </div>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
