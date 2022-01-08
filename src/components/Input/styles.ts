import styled from 'styled-components';

import { CaretRightFill } from '@styled-icons/bootstrap/CaretRightFill';

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  position: relative;
`;

export const StyledInput = styled.input`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  padding: 10px 25px 10px 10px;
  color: ${props => props.theme.colors.onPrimary};
`;

export const Icon = styled(CaretRightFill)`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;
