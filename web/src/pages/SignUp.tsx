import React, { FormEvent, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/signup.css';

import logoImg from '../images/logo.svg';
import api from '../services/api';

const SignUp: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [knowledges, setKnowledges] = useState('');
  const [bio, setBio] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      knowledges,
      bio,
    };

    try {
      const response = await api.post('professinals', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert(`Errro no cadastro`);
    }
  }

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

          <Link to="/login" className="back-link">
            <button className="back-button">
              <FiArrowLeft size="30" color="#fff" />
            </button>
            Já tenho cadastro
          </Link>
        </div>

        <div className="card-form">
          <form onSubmit={handleSubmit} className="content-form">
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                placeholder="Ex: Amanda Padilha"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Ex: amandapadilha@gmail.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                id="whatsapp"
                placeholder="Ex: 15996601743"
                value={whatsapp}
                onChange={event => setWhatsapp(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="knowledges">Conhecimentos</label>
              <input
                id="knowledges"
                placeholder="Ex: React, Node e Typescript"
                value={knowledges}
                onChange={event => setKnowledges(event.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                placeholder="Conte um pouco sobre você"
                maxLength={600}
                value={bio}
                onChange={event => setBio(event.target.value)}
              />
            </div>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
