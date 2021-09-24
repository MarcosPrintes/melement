import styled from 'styled-components';

export const Card = styled.a`
    background: ${props => props.theme.colors.background};
    width: 350px;
    height: 355px;
    display: inline-flex;
    position: relative;
    .card__bottom {
        position: absolute;
        bottom: 0;
        left:0;
        right: 0%;;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 10px;
        background: rgba(0, 0, 0, .8);
        color: ${props => props.theme.colors.onPrimary};
        font-size: 2rem;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1280px) {
        width: 300px;
        height: 305px;
    }
`;