import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Title, Form, Container } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

import * as actions from '../../store/modules/auth/actions';

export default function User() {
  const dispatch = useDispatch();
  const nomeUser = useSelector((state) => state.auth.user.nome);
  const EmailUser = useSelector((state) => state.auth.user.email);

  /** recuperar o estado */
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const setData = () => {
      setNome(nomeUser);
      setEmail(EmailUser);
    };

    setData();
  }, [nomeUser, EmailUser]);

  /** método responsável por validar e enviar o formulário */
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formError = false;

    /** tratamento dos erros de formulaŕio */
    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome precisa ter entre 3 e 50 caracteres!', {
        toastId: 'nome_err',
      });
      formError = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido!', { toastId: 'email_err' });
      formError = true;
    }

    if (formError) return;

    /** editar usuario */
    try {
      setIsLoading(true);
      await axios.put('/users/', {
        nome,
        email,
      });

      toast.success('Usuário editado com sucesso!', { toastId: 'success_id' });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', 0);
      const { data } = get(err, 'response', {});
      const { errors } = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((erro) => toast.error(erro, { toastId: 'err_id' }));
      } else {
        toast.error('Error desconhecido', { toastId: 'err_undefined' });
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Editar usuário</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
