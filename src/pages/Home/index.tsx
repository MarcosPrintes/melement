import { useContext, useState, useEffect } from 'react';
import { Container, TextToTest } from './styles';
import { CardCategory } from '../../components/CardCategory';
import { CardProduct } from '../../components/CardProduct';
import useFriendStatus from '../../hooks/useFriendStatus';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Grid } from '../../components/Grid'
import { SectionTitle } from '../../components/SectionTitle';
import { Product, Category } from '../../services/server/index';

export const Home:React.FC = () => {
  const isOnline = useFriendStatus();
  const {themeName} = useContext(ThemeContext);
  const [categories, setCategories] = useState<Category[]|[]>([]);
  const [products, setProducs] = useState<Product[]>();

  useEffect(() => {
    fetch('api/products')
    .then(response => {
      response.json().then(({products}) => {
        setProducs(products);
      })
    })
    .catch(error => {
      console.log('error mirage', error)
    });
    fetch('/api/categories')
    .then(response => {
      response.json().then(({categories}) => {
        setCategories(categories)
      })
    })
    .catch(error => {
      console.log('error mirage', error)
    });
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      <h1>Contador - HOME: <TextToTest>{themeName}</TextToTest> </h1>
      <p> Valor do hook:  {isOnline} </p>
      <Grid columns={3} columnsSm={2} columnsXs={1} >
          {
            categories.map(category => <CardCategory key={category.id} category={category} />)
          }
      </Grid>
          <SectionTitle title="Destaques" />

      <Grid columns={4} columnsMd={3} columnsSm={2} columnsXs={1}>
        {
          products?.map(prod =>  <CardProduct key={prod.id} product={prod} />)
        }

      </Grid>
    </Container>
  );
}
