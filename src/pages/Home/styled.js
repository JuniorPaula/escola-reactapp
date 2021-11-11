import styled from 'styled-components';
import foto from '../../img/homg-img.png';

export const Banner = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: url(${foto}) no-repeat;
  background-size: 140% 85%;
  background-position: top;

  .content {
    flex: 1;
    padding-top: 5rem;

    h1 {
      color: #fff;
      font-size: 52px;
      margin-bottom: 10px;
    }

    p {
      color: #d1d1d1;
      font-size: 18px;
      line-height: 1.7rem;
    }

    .btn--home {
      background: #262626;
      margin-top: 10px;
    }
  }

  .image {
    flex: 1 1;
    padding-left: 5rem;

    img {
      width: 75%;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column-reverse;

    .content {
      padding: 30px;
    }

    .image {
      display: none;
    }
  }
`;
