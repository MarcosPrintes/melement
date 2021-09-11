import { useContext } from 'react';
import { Container } from './styles';
import useFriendStatus from '../../hooks/useFriendStatus';
import { MyContext } from '../../contexts/MyContext';

export const Home:React.FC = () => {
  const isOnline = useFriendStatus();
  const {counter} = useContext(MyContext);
  return (
    <Container>
      <h1>Home</h1>
      <h1>Contador - HOME: {counter} </h1>
      <p> Valor do hook:  {isOnline} </p>
    </Container>
  );
}
