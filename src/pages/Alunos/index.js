import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

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

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Alunos</Title>
      <AlunosContainer>
        {alunos.map((aluno) => (
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

              <Link to={`/alunos/${aluno.id}/delete`}>
                <FaWindowClose size={16} className="delete" />
              </Link>
            </div>
          </div>
        ))}
      </AlunosContainer>
    </Container>
  );
}
