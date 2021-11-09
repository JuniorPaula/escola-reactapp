import styled from 'styled-components';

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
    color: red;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  font-weight: 400;
`;

export const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
