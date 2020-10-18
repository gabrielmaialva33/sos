import React from 'react';
import { FiPower } from 'react-icons/fi';

import '../styles/pages/profile.css';

import chatImg from '../images/chat.svg';
import picImg from '../images/pic.svg';

const Profile: React.FC = () => {
  return (
    <div id="page-profile">
      <header>
        <img src={chatImg} alt="SOS" />
        <h1>Meu Perfil</h1>

        <button className="logout">
          <FiPower color="#000" size="30" />
        </button>
      </header>

      <div className="content-wrapper">
        <img src={picImg} alt="Profile" />

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
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
