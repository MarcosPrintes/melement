import { useContext, useState, useEffect } from "react";

import { Modal } from "../../components/Modal";
import { Grid } from "../../components/Grid";
import { SectionTitle } from "../../components/SectionTitle";
// import { CardCategory } from "../../components/CardCategory";
import { CardProduct } from "../../components/CardProduct";
import useFriendStatus from "../../hooks/useFriendStatus";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Product /*, Category*/ } from "../../services/server/index";

import { Container, TextToTest } from "./styles";

export const Home: React.FC = () => {
  const isOnline = useFriendStatus();
  const { themeName } = useContext(ThemeContext);
  // const [categories, setCategories] = useState<Category[] | []>([]);
  const [products, setProducs] = useState<Product[]>();
  const [showQuickView, setShowQuickView] = useState(false);
  const [productSelected, setProductSelected] = useState<Product>(
    {} as Product
  );

  useEffect(() => {
    fetch("api/products")
      .then((response) => {
        response.json().then(({ products }) => {
          setProducs(products);
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
    fetch("/api/categories")
      .then((response) => {
        response.json().then((/*{categories}*/) => {
          // setCategories(categories);
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  }, []);

  return (
    <Container>
      <Modal
        onClose={() => setShowQuickView(false)}
        product={productSelected}
        visible={showQuickView}
      />
      <h1>Home</h1>
      <h1>
        Contador - HOME: <TextToTest>{themeName}</TextToTest>{" "}
      </h1>
      <p> Valor do hook: {isOnline} </p>
      {/* <Grid columns={3} columnsSm={2} columnsXs={1}>
        {categories.map((category) => (
          <CardCategory key={category.id} category={category} />
        ))}
      </Grid> */}
      <SectionTitle title="Destaques" />

      <Grid columns={4} columnsMd={3} columnsSm={2} columnsXs={1}>
        {products?.map((prod) => (
          <CardProduct
            onQuickview={(prod) => {
              setProductSelected(prod);
              setShowQuickView(true);
            }}
            key={prod.id}
            product={prod}
          />
        ))}
      </Grid>
    </Container>
  );
};
