import { useContext, /*useState,*/ useEffect } from 'react';
import { Container, TextToTest } from './styles';
import { CardCategory } from '../../components/CardCategory';
import { CardProduct } from '../../components/CardProduct';
import useFriendStatus from '../../hooks/useFriendStatus';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Grid } from '../../components/Grid'
import { SectionTitle } from '../../components/SectionTitle';

//type Category = {
//  categoryTitle: string,
//  id: number
//}
const category = {
  name: "Moletom",
  url: "#",
}

const prod = {
  tag: "Novo",
  productName: "Jaqueta Basic Logo Element",
  price: "R$ 379,90",
  parcels: "10x sem juros de R$ 37,99",
  promo: "à vista com 5% de desconto no boleto",
}

export const Home:React.FC = () => {
  const isOnline = useFriendStatus();
  const {themeName} = useContext(ThemeContext);
  //const [categorys, setCategorys] = useState<Category[]|[]>([]);

  useEffect(() => {
    fetch('api/products')
    .then(response => {
      response.json().then(res => {
        //setCategorys(res);
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
      <Grid columns={3}>
          {Array.from({length: 6}).map(el => (
            <CardCategory category={category} />
          ))}
      </Grid>
          <SectionTitle title="Destaques" />

      <Grid columns={4}>
        {Array.from({length: 8}).map(el => (
          <CardProduct product={prod} />
        ))}
      </Grid>
    </Container>
  );
}
