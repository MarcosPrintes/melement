import { useContext, useEffect, useState } from 'react';
import { Container, TextToTest } from './styles';
import { CardCategory } from '../../components/CardCategory';
import useFriendStatus from '../../hooks/useFriendStatus';
import { ThemeContext } from '../../contexts/ThemeContext';

type Category = {
  categoryTitle: string,
  id: number
}

export const Home:React.FC = () => {
  const isOnline = useFriendStatus();
  const {themeName} = useContext(ThemeContext);
  const [categorys, setCategorys] = useState<Category[]|[]>([]);

  useEffect(() => {
    fetch('api/products')
    .then(response => {
      response.json().then(res => {
        setCategorys(res);
      })
    })
    .catch(error => {
      console.log('error mirage', error)
    })
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      <h1>Contador - HOME: <TextToTest>{themeName}</TextToTest> </h1>
      <p> Valor do hook:  {isOnline} </p>
      {categorys.map((category, index) => (
        <CardCategory key={index} />
      ))}
    </Container>
  );
}
