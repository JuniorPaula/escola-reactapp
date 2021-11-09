import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamationCircle,
} from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GobalStyles';
import { AlunosContainer, ProfilePicture, Title } from './styled';

import Loading from '../../components/Loading';

import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  function handleDeleteAsk(e) {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  }

  async function handleDelete(e, id, index) {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`alunos/${id}`);

      const newAlunos = [...alunos];
      newAlunos.splice(index, 1);
      setAlunos(newAlunos);

      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.warning('Você precisa fazer o login', { toastId: 'id_info' });
      } else {
        toast.error(err, 'Erro ao tentar excluir!', { toastId: 'id_err' });
      }
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Alunos</Title>
      <AlunosContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={50} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <div className="acoes">
              <Link to={`/alunos/${aluno.id}/edit`}>
                <FaEdit size={16} />
              </Link>

              <Link onClick={handleDeleteAsk} to={`/alunos/${aluno.id}/delete`}>
                <FaWindowClose size={16} className="delete" />
              </Link>
              <FaExclamationCircle
                fontSize={16}
                cursor="pointer"
                display="none"
                color="#d7b22d"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              />
            </div>
          </div>
        ))}
      </AlunosContainer>
    </Container>
  );
}
