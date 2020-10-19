import React, { FormEvent, useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../services/api';
import IProfessional from './dtos/IProfessional';

import '../styles/pages/profile.css';

import chatImg from '../images/chat.svg';
import picImg from '../images/pic.svg';

const Profile: React.FC = () => {
  const history = useHistory();
  const professionalId = localStorage.getItem('@sos/professional_id');

  const [professional, setProfessional] = useState<IProfessional>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [knowledges, setKnowledges] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (!professionalId) {
      history.push('/login');
    }

    api
      .get('profile', {
        headers: {
          Authorization: professionalId,
        },
      })
      .then(response => {
        setProfessional(response.data);
      });
  }, [professionalId]);

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
      const response = await api.put('profile', data);
      alert(`Seus dados foram atualizados com sucesso.`);
    } catch (error) {
      alert(`Errro ao atualizar dados.`);
    }
  }

  function handleLogout() {
    localStorage.removeItem('@sos/professional_id');
    history.push('/');
  }

  return (
    <div id="page-profile">
      <header>
        <img src={chatImg} alt="SOS" />
        <h1>Meu Perfil</h1>

        <button className="logout" onClick={handleLogout}>
          <FiPower color="#000" size="30" />
        </button>
      </header>

      <div className="content-wrapper">
        <img src={picImg} alt="Profile" />

        <form onSubmit={handleSubmit} className="content-form">
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder={professional?.name}
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder={professional?.email} value={email} />
          </div>
          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input
              id="whatsapp"
              placeholder={professional?.whatsapp}
              value={whatsapp}
            />
          </div>
          <div className="input-block">
            <label htmlFor="knowledges">Conhecimentos</label>
            <input
              id="knowledges"
              placeholder={professional?.knowledges}
              value={knowledges}
            />
          </div>
          <div className="input-block">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              placeholder={professional?.bio}
              maxLength={600}
              value={bio}
            />
          </div>

          <button className="button" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
