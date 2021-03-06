import styled from 'styled-components';

interface ContainerProps {
  visible: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: all 0.3s ease;
`;

export const Content = styled.div`
  min-width: 420px;
  padding: 30px;
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  position: relative;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  margin-right: 1rem;
`;
export const Informations = styled.div`
  margin-left: 1rem;

  p {
    margin: 15px 0;
    font-weight: 900;
  }

  img {
    max-width: 60px;
    border: 2px solid #000;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.error};
  border: unset;
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;
