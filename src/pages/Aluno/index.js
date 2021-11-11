import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);

  /** setar o estado */
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);

        if (status === 400) {
          toast.error('Usuário não existe', { toastId: 'userNotFound' });
          history.push('/');
        }
      }
    }

    getData();
  }, [id]);

  /** método responsável por validar e enviar o formulário */
  const handleSubmit = (e) => {
    e.preventDefault();
    let formError = false;

    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome precisa ter entre 3 e 50 caracteres!', {
        toastId: 'nome_err',
      });
      formError = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      toast.error('Sobrenome precisa ter entre 3 e 50 caracteres!', {
        toastId: 'sobrenome_err',
      });
      formError = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido!', { toastId: 'email_err' });
      formError = true;
    }

    if (!isInt(String(idade))) {
      toast.error('Idade precisa ser um numero inteiro!', {
        toastId: 'idade_err',
      });
      formError = true;
    }

    if (!isFloat(String(peso))) {
      toast.error('Peso inválido!', { toastId: 'peso_err' });
      formError = true;
    }

    if (!isFloat(String(altura))) {
      toast.error('Altura inválido!', { toastId: 'altura_err' });
      formError = true;
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
