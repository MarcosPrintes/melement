import styled from 'styled-components';

export const Card = styled.a`
    display: inline-block;

    width: 255px;
    height: 270px;
    position: relative;
    margin-bottom: 60px;

    .tag {
        display: inline-flex;
        padding: 3px 15px;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.onBackground};
        position: absolute;
        top: 15px;
        left: 15px;
        font-weight: 400;
        font-size: 1rem;
        border-radius: 4px;
    }

    button {
        background-color: ${props => props.theme.colors.error};
        border: none;
        color: ${props => props.theme.colors.onError};
        display: inline-flex;
        padding: 15px 25px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        opacity: 0;
        transition: all .2s ease;
        &:hover {
            color: ${props => props.theme.colors.primary};
            opacity: 1;
        }
    }

    p {
        color: ${props => props.theme.colors.primary};
        margin-bottom: 3px;
    }

    .card {
        &__title {
            font-size: 1.4rem;
            font-weight: 900;
            margin-bottom: 10px;
        }
        &__price, &__parcels {
            font-size: 1.2rem;
            font-weight: 900;
        }

        &__promo {
            font-size: 1rem;
            font-weight: 400;
            color: ${props => props.theme.colors.primaryLight};
            span {
                color: ${props => props.theme.colors.error};
            }
        }
    }

    &:hover {
        button {
            opacity: 1;
        }
    }
`