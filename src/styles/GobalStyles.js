import styled, { createGlobalStyle } from 'styled-components';

import { bgColor, primaryColor } from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${bgColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    background: ${primaryColor};
    color: #fff;
    padding: 10px 18px;
    font-size: 18px;
    transition: all 300ms;
    border-radius: 5px;
  }

  button:hover {
    filter: brightness(75%);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 620px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
