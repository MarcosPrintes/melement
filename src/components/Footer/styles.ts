import styled from 'styled-components';

export const Container = styled.footer`
  padding: 30px 0 0;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onPrimary};
  margin-top: 60px;

  .footer__grid {
    display: flex;
    justify-content: space-between;
    .footer__block {
      width: calc(80% / 5);
    }
  }
  .footer__block {
    > div {
      text-transform: uppercase;
      font-size: 1.2rem;
      margin-bottom: 10px;
      font-weight: 900;
      color: ${props => props.theme.colors.onSecondary};
    }

    > p {
      font-size: 1.2rem;
      margin-bottom: 15px;
      color: ${props => props.theme.colors.onSecondary};
      a {
        font-weight: 900;
        color: ${props => props.theme.colors.onSecondary};
      }
    }
    nav {
      ul li a {
        padding: 5px 0px;
        display: block;
        font-size: 1.2rem;
        font-weight: 300;
        color: ${props => props.theme.colors.onSecondary};
        transition: all 0.3s ease;
        &:hover {
          font-weight: 700;
        }
      }
    }
  }

  .footer__social {
    display: flex;
    align-items: center;
    margin-top: 10px;
    li {
      &:not(:last-of-type) {
        margin-right: 5px;
      }

      a {
        img {
          width: 28px;
          transition: all 0.3s ease;
          transform: scale(1);
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  padding: 15px 0;
  margin-top: 30px;
  p {
    font-size: 1.2rem;
  }
`;
