import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.background};

    h1 {
        color: ${props => props.theme.colors.onBackground};
    }
`;

export const TextToTest = styled.span`
    color: #000
`
