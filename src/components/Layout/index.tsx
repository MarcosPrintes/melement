import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container, Center } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Center>{children}</Center>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
