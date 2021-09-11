import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`

export const WarningTop = styled.div`
    background: ${props => props.theme.warningTopBg};
    padding: 5px 0;

    span {
        display: block;
        color: ${props => props.theme.warningTopText};
        text-align: center;
        font-size: 1.4rem;
    }
`;

export const UserArea =  styled.div`
    background: ${props => props.theme.userAreaBg};
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

export const UserAreaNavButton =  styled.button`
    background: ${props => props.theme.userAreaBgButton};
    color: ${props => props.theme.userAreaLinks};
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all .3s ease;
    &:hover {
        border: 1px solid rgba(255, 255, 255, .3);
        color: ${props => props.theme.userAreaBgButton};
        background: ${props => props.theme.userAreaLinks};
    }
`;


export const UserAreaNavLinks =  styled.div`
    ul {
        display: flex;
        li {
            a {
                color: ${props => props.theme.userAreaLinks};
                font-size: 1.6rem;
                transition: color .3s ease;

                &:hover {
                    color: ${props => props.theme.userAreaLinksHover};
                }
            }
            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

export const HeaderNav = styled.div`
    background: ${props => props.theme.headerNavBg};
    padding: 20px;
`;

export const HeaderNavLogo = styled.div`
`;

export const HeaderNavLinks = styled.nav`
    ul {
        display: flex;
        align-items: center;
        li {
            a {
                color: ${props => props.theme.headerNavLinks};
                font-size: 1.7rem;
                transition: color .3s ease;
                &:hover {
                    color: ${props => props.theme.userAreaLinksHover};
                }
            }

            &:not(:last-of-type) {
                margin-right: 30px;
            }
        }
    }
`;