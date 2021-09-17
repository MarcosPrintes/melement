import styled from "styled-components";

export const Container = styled.footer`
    padding: 30px 0 0;
    background-color: ${props => props.theme.colors.primary};
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
        }

        > p {
            font-size: 1.2rem;
            a {
                font-weight: 900;
                color: ${props => props.theme.colors.onPrimary}
            }
        }
        nav {
            ul li a {
                padding: 5px 0px;
                display: block;
                font-size: 1.2rem;
                font-weight: 300;
                color: ${props => props.theme.colors.onPrimary};
                transition: all .3s ease;
                &:hover {
                    font-weight: 700;
                }

            }
        }
    }
`;

export const CopyRight = styled.div`
    text-align: center;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.onSecondary};
    padding: 15px 0;
    margin-top: 30px;
    p {
        font-size: 1.2rem
    }
`;