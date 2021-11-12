import styled from 'styled-components';

export const Container = styled.section`
  max-width: 520px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #262626;
  margin-bottom: 20px;
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
