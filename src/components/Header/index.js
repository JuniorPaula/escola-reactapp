import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const nome = useSelector((state) => state.auth.user.nome);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      {isLoggedIn ? (
        <>
          <span className="nome--header">Olá, {nome}</span>
          <Link onClick={handleLogout} to="/logout">
            Sair
          </Link>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">
            <button type="button" className="btn">
              registrar-se
            </button>
          </Link>
        </>
      )}
    </Nav>
  );
}
