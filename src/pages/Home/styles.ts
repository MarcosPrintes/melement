import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.bg};

    h1 {
        color: ${props => props.theme.fg};
    }
`;
