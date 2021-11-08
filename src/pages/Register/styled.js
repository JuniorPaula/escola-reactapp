import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: #262626;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-weight: 600;
    color: #222;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #d5d5d5;
    padding: 0 10px;
    margin-top: 10px;
  }
`;
