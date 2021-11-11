import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
  }

  .nome--header {
    margin-right: 15px;
  }
  .btn {
    background-color: #fff;
    color: ${primaryColor};
    font-weight: 700;
  }
`;
