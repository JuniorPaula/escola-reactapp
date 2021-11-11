import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunosContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }

  div + div {
    border-top: 1px solid #eee;
  }
  .acoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .acoes .delete {
    color: brown;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media (max-width: 524px) {
    div {
      flex-flow: column;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  font-weight: 400;
  color: #262626;
`;

export const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const NewAluno = styled(Link)`
  display: block;
  padding: 10px;
  text-align: right;

  @media (max-width: 524px) {
    text-align: center;
  }
`;
