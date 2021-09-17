import styled, {css} from "styled-components";

interface GridProps {
    colunas: number
}

export const GridContainer = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${props => css`repeat(${props.colunas}, 1fr)`};
    row-gap: 35px;
`;