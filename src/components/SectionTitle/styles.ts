import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    margin: 60px 0;
    span {
        color: ${props => props.theme.colors.primary};
        font-size: 2.2rem;
        display: inline-block;
        position: relative;
        &::before, &::after {
            content: '';
            width: 100px;
            height: 1px;
            background: ${props => props.theme.colors.primary};
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }

        &::before {
            left: 0;
            transform: translate(calc(-100% - 15px), -50%);
        }

        &::after {
            right: 0;
            transform: translate(calc(100% + 15px), -50%);
        }
    }
`;