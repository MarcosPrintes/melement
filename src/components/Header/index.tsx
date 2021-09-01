import {
    Container,
    FlexBetweenBox,
    HeaderNav,
    HeaderNavLinks,
    UserArea,
    UserAreaNav,
    UserAreaNavButton,
    UserAreaNavLinks,
    WarningTop
} from './styles';
import { Center } from '../Layout/styles';

export const Header:React.FC = () => {
    return (
        <Container>
            <WarningTop>
                <Center>
                    <span>
                        SALE Começou! Descontos de até 40% OFF!
                    </span>
                </Center>
            </WarningTop>
            <UserArea>
                <Center>
                    <UserAreaNav>
                        <div>
                            <UserAreaNavButton> Masculino </UserAreaNavButton>
                            <UserAreaNavButton> Feminino </UserAreaNavButton>
                        </div>
                        <div>
                            <UserAreaNavLinks>
                                <ul>
                                    <li><a href="/"> Olá, visitante! </a></li>
                                    <li><a href="/"> Nossas lojas </a></li>
                                    <li><a href="/"> Carrinho </a></li>
                                </ul>
                            </UserAreaNavLinks>
                        </div>
                    </UserAreaNav>
                 </Center>
            </UserArea>
            <HeaderNav>
                <Center>
                    <FlexBetweenBox>
                        <div>
                            <h1>
                            Logo
                            </h1>
                        </div>
                        <HeaderNavLinks>
                            <ul>
                                <li><a href="/"> Shop </a></li>
                                <li><a href="/"> Blog </a></li>
                                <li><a href="/"> Equipe </a></li>
                                <li><a href="/"> Vídeos </a></li>
                                <li><a href="/"> História </a></li>
                            </ul>
                        </HeaderNavLinks>
                    </FlexBetweenBox>
                </Center>
            </HeaderNav>
        </Container>
    )

}
