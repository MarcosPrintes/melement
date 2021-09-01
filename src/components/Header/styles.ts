import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`

export const WarningTop = styled.div`
    background: #c41230;
    padding: 5px 0;

    span {
        display: block;
        color: #ffffff;
        text-align: center;
        font-size: 1.4rem;
    }
`;

export const UserArea =  styled.div`
    background: #242424;
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
    background: #403f3f;
    border-radius: 4px;
    color: #fff;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
`;


export const UserAreaNavLinks =  styled.div`
    ul {
        display: flex;
        li {
            a {
                color: #fff;
                font-size: 1.6rem;
                transition: color .3s ease;

                &:hover {
                    color: #c41230;
                }
            }
            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

export const HeaderNav = styled.div`
    background: #000;
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
                color: #fff;
                font-size: 1.7rem;
            }

            &:not(:last-of-type) {
                margin-right: 30px;
            }
        }
    }
`;