import React, { FormEvent, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import '../styles/pages/signin.css';

import api from '../services/api';
import logoImg from '../images/logo.svg';

const SignIn: React.FC = () => {
  const history = useHistory();

  const [id, setId] = useState('');

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post('sessions', { id });
      localStorage.setItem('@sos/professional_id', id);
      history.push('/profile');
    } catch (error) {
      alert('Falha no Login, tente novamente');
    }
  }

  return (
    <div id="page-signin">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo da plataforma SOS" />

        <main>
          <h1>Faça seu logon</h1>
        </main>

        <form onSubmit={handleLogin}>
          <div className="input-logon">
            <label htmlFor="name">Seu código</label>
            <input
              id="id"
              placeholder="Ex: E4RCS9"
              value={id}
              onChange={event => {
                setId(event.target.value);
              }}
            />
          </div>
          <button className="button-logon" type="submit">
            Entrar
          </button>
        </form>
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
