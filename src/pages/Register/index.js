import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GobalStyles';

import { Title, Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStorage = useSelector((state) => state.auth.user.nome);
  const emailStorage = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStorage);
    setEmail(emailStorage);
  }, [emailStorage, id, nomeStorage]);

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

    if (!id && (password.length < 3 || password.length > 255)) {
      errorsForm = true;
      toast.error('Senha precisa ter entre 3 e 50 caracteres!', {
        toastId: 'error_password',
      });
    }

    if (errorsForm) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>{id ? 'Editar dados' : 'Crie sua conta'}</Title>

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

        <button type="submit">{id ? 'Salvar' : 'Criar minha conta'}</button>
      </Form>
    </Container>
  );
}
