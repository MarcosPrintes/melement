import { Product } from '../../services/server';

import { Button, Container, Content, Image, Informations } from './styles';

interface ModalProps {
  product: Product;
  visible: boolean;
  onClose: () => void;
}

export const Modal = ({
  onClose,
  visible,
  product: { productName, image, price },
}: ModalProps) => {
  return (
    <Container onClick={() => onClose()} visible={visible}>
      <Content onClick={e => e.stopPropagation()}>
        <Image>
          <img src={image} alt="" />
        </Image>
        <Informations>
          <h1>{productName}</h1>
          <p> {`R$ ${price}`} </p>
          <img src={image} alt={productName} />
        </Informations>

        <Button onClick={() => onClose()}> X </Button>
      </Content>
    </Container>
  );
};
