import { useContext } from 'react';

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
import Logo from '../../assets/logo-element-black.png';
import { Center } from '../Layout/styles';
import {MyContext} from '../../contexts/MyContext';

export const Header:React.FC = () => {
    const {counter, increment} = useContext(MyContext);
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
                            <UserAreaNavButton onClick={() => {}} > Masculino </UserAreaNavButton>
                            <UserAreaNavButton onClick={() => {}} > Feminino </UserAreaNavButton>
                            <button onClick={() => increment()}> incrementar </button>
                            <p style={{color: "#fff"}} >Valor contador: {counter}</p>
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
                            <a href="/">
                                <img src={Logo} alt="Logo Element" />
                            </a>
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
