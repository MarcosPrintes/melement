import { useContext, useState, useEffect } from 'react';

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
import LogoFemale from '../../assets/logo-element-female.png';
import { Center } from '../Layout/styles';
import {ThemeContext} from '../../contexts/ThemeContext';

export const Header:React.FC = () => {
    const {themeName, setThemeName} = useContext(ThemeContext);
    const [currentLogo, setCurrentLogo ] = useState<string>(Logo);

    useEffect(() => {
        setCurrentLogo( themeName === 'male' ? Logo : LogoFemale)
    }, [themeName]);

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
                            <UserAreaNavButton isActive={themeName === 'male'} onClick={() => setThemeName("male") } > Masculino </UserAreaNavButton>
                            <UserAreaNavButton isActive={themeName === 'female'} onClick={() => setThemeName("female") } > Feminino </UserAreaNavButton>
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
                                <img src={currentLogo} alt="Logo Element" />
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