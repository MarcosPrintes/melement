import { Product } from '../../services/server';

import { Button, Container, Content } from './styles';

interface ModalProps {
  product: Product;
  visible: boolean;
  onClose: () => void;
}

export const Modal = ({
  onClose,
  visible,
  product: { productName },
}: ModalProps) => {
  return (
    <Container onClick={() => onClose()} visible={visible}>
      <Content onClick={e => e.stopPropagation()}>
        <h1>{productName}</h1>
        <Button onClick={() => onClose()}> X </Button>
      </Content>
    </Container>
  );
};
