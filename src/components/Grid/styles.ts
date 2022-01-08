import styled, { css } from 'styled-components';

interface GridProps {
  columns: number;
  columnsMd?: number;
  columnsSm?: number;
  columnsXs?: number;
}

export const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${props => css`repeat(${props.columns}, 1fr)`};
  justify-items: center;
  row-gap: 35px;

  @media screen and (max-width: 1280px) {
    grid-template-columns: ${props =>
      css`repeat(${props.columnsMd ? props.columnsMd : props.columns}, 1fr)`};
  }

  @media screen and (max-width: 910px) {
    grid-template-columns: ${props =>
      css`repeat(${props.columnsSm ? props.columnsSm : props.columns}, 1fr)`};
  }

  @media screen and (max-width: 764px) {
    grid-template-columns: ${props =>
      css`repeat(${props.columnsXs ? props.columnsXs : props.columns}, 1fr)`};
  }
`;
