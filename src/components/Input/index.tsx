import { StyledInput, StyledInputContainer, Icon } from "./styles";

export const Input = () => {
  return (
    <StyledInputContainer>
      <StyledInput placeholder="PESQUISAR" />
      <Icon color="#fff" size={15} />
    </StyledInputContainer>
  );
};
