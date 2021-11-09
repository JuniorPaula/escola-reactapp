import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GobalStyles';
import { Title, Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorsForm = false;

    if (!isEmail(email)) {
      errorsForm = true;
      toast.error('E-mail inválido', {
        toastId: 'error_email',
      });
    }

    if (password.length < 3 || password.length > 255) {
      errorsForm = true;
      toast.error('Senha inválida!', {
        toastId: 'error_password',
      });
    }

    if (errorsForm) return;
    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <Container>
      <Title>Faça seu Login</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
