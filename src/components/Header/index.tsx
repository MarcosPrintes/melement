/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ShoppingCart } from "@styled-icons/entypo/ShoppingCart";
import { Input } from "../Input";
import { ThemeContext } from "../../contexts/ThemeContext";

import {
  Container,
  CloseMenu,
  FlexBetweenBox,
  HeaderNav,
  HeaderNavLinks,
  UserArea,
  UserAreaNav,
  UserAreaNavButton,
  UserAreaNavLinks,
  SandwichMenu,
  WarningTop,
} from "./styles";
import { Center } from "../Layout/styles";

import Logo from "../../assets/logo-element-black.png";
import LogoFemale from "../../assets/logo-element-female.png";

export const Header: React.FC = () => {
  const { themeName, setThemeName } = useContext(ThemeContext);
  const [currentLogo, setCurrentLogo] = useState<string>(Logo);
  const [showMobileMenu, sertShowMobileMenu] = useState(false);

  useEffect(() => {
    setCurrentLogo(themeName === "male" ? Logo : LogoFemale);
  }, [themeName]);

  return (
    <Container>
      <WarningTop>
        <Center>
          <span>SALE Começou! Descontos de até 40% OFF!</span>
        </Center>
      </WarningTop>
      <UserArea>
        <Center>
          <UserAreaNav>
            <div>
              <UserAreaNavButton
                isActive={themeName === "male"}
                onClick={() => setThemeName("male")}
              >
                {" "}
                Masculino{" "}
              </UserAreaNavButton>
              <UserAreaNavButton
                isActive={themeName === "female"}
                onClick={() => setThemeName("female")}
              >
                {" "}
                Feminino{" "}
              </UserAreaNavButton>
            </div>
            <div>
              <UserAreaNavLinks>
                <ul>
                  <li>
                    <a href="/"> Olá, visitante! </a>
                  </li>
                  <li>
                    <a href="/"> Nossas lojas </a>
                  </li>
                  <li>
                    <button type="button" onClick={() => {}}>
                      <ShoppingCart size={12} /> Carrinho (0)
                    </button>
                  </li>
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
            <SandwichMenu onClick={() => sertShowMobileMenu(true)} size={32} />
            <HeaderNavLinks showMobileMenu={showMobileMenu}>
              <ul>
                <li>
                  <a href="/"> Shop </a>
                </li>
                <li>
                  <a href="/"> Blog </a>
                </li>
                <li>
                  <a href="/"> Equipe </a>
                </li>
                <li>
                  <a href="/"> Vídeos </a>
                </li>
                <li>
                  <a href="/"> História </a>
                </li>
              </ul>
              <Input />
              <CloseMenu onClick={() => sertShowMobileMenu(false)} size={28} />
            </HeaderNavLinks>
          </FlexBetweenBox>
        </Center>
      </HeaderNav>
    </Container>
  );
};
