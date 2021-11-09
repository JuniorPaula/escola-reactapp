import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { get } from 'lodash';
import { Container } from '../../styles/GobalStyles';

import { Title, Form } from './styled';

import axios from '../../services/axios';
import history from '../../services/history';

import Loading from '../../components/Loading';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let errorsForm = false;

    if (nome.length < 3 || nome.length > 255) {
      errorsForm = true;
      toast.error('Nome precisa ter acima de 3 caracteres!', {
        toastId: 'error_nome',
      });
    }

    if (!isEmail(email)) {
      errorsForm = true;
      toast.error('E-mail inválido', {
        toastId: 'error_email',
      });
    }

    if (password.length < 3 || password.length > 255) {
      errorsForm = true;
      toast.error('Senha precisa ter entre 3 e 50 caracteres!', {
        toastId: 'error_password',
      });
    }

    if (errorsForm) return;

    setIsLoading(true);

    try {
      await axios.post('/users', {
        nome,
        password,
        email,
      });

      toast.success('Você fez seu cadastro!', { toastId: 'successID' });
      setIsLoading(false);
      history.push('/login');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);

      errors.map((err) => toast.error(err, { toastId: 'err' }));
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Crie sua conta</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Defina sua senha"
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
