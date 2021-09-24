import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`

export const WarningTop = styled.div`
    background: ${props => props.theme.colors.error};
    padding: 5px 0;

    span {
        display: block;
        color: ${props => props.theme.colors.onError};
        text-align: center;
        font-size: 1.4rem;
    }
`;

export const UserArea =  styled.div`
    background: ${props => props.theme.colors.primaryLight};
    padding: 10px;
`;

export const FlexBetweenBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const UserAreaNav = styled(FlexBetweenBox)`
    button:first-of-type {
        margin-right: 10px;
    }
`;

interface ThemeNameProps {
    readonly isActive:boolean
}

export const UserAreaNavButton =  styled.button<ThemeNameProps>`
    background: ${props => props.isActive ? props.theme.colors.background : props.theme.colors.primaryLight};
    color: ${props => props.isActive ? props.theme.colors.onBackground : props.theme.colors.onPrimaryLight};
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all .3s ease;
    &:hover {
        border: 1px solid rgba(255, 255, 255, .3);
        color: ${props => props.theme.colors.onSecondary};
        background: ${props => props.theme.colors.secondary};
    }
`;


export const UserAreaNavLinks =  styled.div`
    ul {
        display: flex;
        li {
            a, button {
                color: ${props => props.theme.colors.onPrimary};
                font-size: 1.6rem;
                transition: color .3s ease;
                border: none;
                background: transparent;
                cursor: pointer;
                &:hover {
                    color: ${props => props.theme.colors.onPrimary};
                }
            }
            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

export const HeaderNav = styled.div`
    background: ${props => props.theme.colors.secondary};
    padding: 20px;
`;

export const HeaderNavLogo = styled.div`
`;

export const HeaderNavLinks = styled.nav`
    display: flex;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        margin-right: 15px;
        li {
            a {
                color: ${props => props.theme.colors.onSecondary};
                font-size: 1.7rem;
                transition: color .3s ease;
                &:hover {
                    color: ${props => props.theme.colors.onSecondary};
                }
            }

            &:not(:last-of-type) {
                margin-right: 30px;
            }
        }
    }
`;