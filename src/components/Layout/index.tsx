import { Header } from '../Header';
import { Container, Center } from './styles';


const Layout:React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                <Center>
                    {children}
                </Center>
            </Container>
        </>
    )
}

export default Layout;