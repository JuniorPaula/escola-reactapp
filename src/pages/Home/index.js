import React from 'react';
import { Link } from 'react-router-dom';

import { Banner } from './styled';
import fotoBanner from '../../img/banner.png';

export default function Home() {
  return (
    <Banner>
      <div className="image">
        <img src={fotoBanner} alt="foto de capa" />
      </div>
      <div className="content">
        <h1>App Escola</h1>
        <p>
          Uma aplicação para amazenamento e registro de alunos. Desenvolvida em
          ReactJS no frontend, e consumindo os dados de uma API externa,
          desenvolvida em NodeJS. Entra lá e confira!
        </p>
        <Link to="/register/">
          <button type="button" className="btn--home">
            Cadastrar
          </button>
        </Link>
      </div>
    </Banner>
  );
}
