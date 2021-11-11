import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
  color: #262626;
  font-size: 32px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 18px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 10px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid ${primaryColor};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
