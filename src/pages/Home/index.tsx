import { useContext } from 'react';
import { Container, TextToTest } from './styles';
import useFriendStatus from '../../hooks/useFriendStatus';
import { ThemeContext } from '../../contexts/ThemeContext';

export const Home:React.FC = () => {
  const isOnline = useFriendStatus();
  const {themeName} = useContext(ThemeContext);
  return (
    <Container>
      <h1>Home</h1>
      <h1>Contador - HOME: <TextToTest>{themeName}</TextToTest> </h1>
      <p> Valor do hook:  {isOnline} </p>
    </Container>
  );
}
