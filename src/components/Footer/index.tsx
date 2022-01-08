import { Container, CopyRight } from './styles';
import { Center } from '../Layout/styles';
import facebook from '../../assets/icons/ic-facebook.svg';
import twitter from '../../assets/icons/ic-twitter.svg';
import youtube from '../../assets/icons/ic-youtube.svg';
import instagram from '../../assets/icons/ic-instagram.svg';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Center>
        <div className="footer__grid">
          <div className="footer__block">
            <div> Mapa do site </div>
            <nav>
              <ul>
                <li>
                  <a href="google.com"> Blog </a>
                </li>
                <li>
                  <a href="google.com"> Equipe </a>
                </li>
                <li>
                  <a href="google.com"> Vídeos </a>
                </li>
                <li>
                  <a href="google.com"> Histórico </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__block">
            <div> Central de ajuda </div>
            <nav>
              <ul>
                <li>
                  <a href="google.com"> Status do pedido </a>
                </li>
                <li>
                  <a href="google.com"> Tabela de medidas </a>
                </li>
                <li>
                  <a href="google.com"> Entregas </a>
                </li>
                <li>
                  <a href="google.com"> Trocas e Devoluções </a>
                </li>
                <li>
                  <a href="google.com"> Como comprar </a>
                </li>
                <li>
                  <a href="google.com"> Perguntas frequentes </a>
                </li>
                <li>
                  <a href="google.com"> Pagamentos e Segurança </a>
                </li>
                <li>
                  <a href="google.com"> Termos e condições </a>
                </li>
                <li>
                  <a href="google.com"> Política de privacidade </a>
                </li>
                <li>
                  <a href="google.com"> Fale Conosco </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__block">
            <p>
              Estamos nisso juntos. Uma mensagem do nosso time sobre o COVID-19.{' '}
              <a href="google.com"> Leia aqui</a>.
            </p>
            <div>
              Redes sociais
              <ul className="footer__social">
                <li>
                  <a href="google.com" target="_blank">
                    {' '}
                    <img src={facebook} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="google.com" target="_blank">
                    {' '}
                    <img src={twitter} alt="Twitter" />{' '}
                  </a>
                </li>
                <li>
                  <a href="google.com" target="_blank">
                    {' '}
                    <img src={youtube} alt="Youtube" />
                  </a>
                </li>
                <li>
                  <a href="google.com" target="_blank">
                    {' '}
                    <img src={instagram} alt="Instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__block">
            <div> Contato </div>
            <p>
              Atendimento das 08h as 17h <br /> de 2ª a 6ª. Sábados, domingos{' '}
              <br /> e feriados não temos <br /> atendimento Exclusivo para
              compras <br /> online. (11) 3618-8600 <br /> sac@elementbrand.com
            </p>
          </div>
          <div className="footer__block">
            <div> Newsletter </div>
          </div>
        </div>
      </Center>
      <CopyRight>
        <Center>
          <p>
            Copyright © Element, Todos os direitos reservados. <br />
            As fotos aqui veiculadas, logotipo e marca são de propriedade do
            site http://www.elementbrand.com.br. <br />
            É vetada a sua reprodução, total ou parcial, sem a expressa
            autorização da administradora do site. <br />
            Element Online Shop é uma empresa do grupo Boardriders do Brasil
            Comércio de Artigos Esportivos Ltda - CNPJ: 04.912.235/0001-00 -
            Endereço: Rua Argemiro Rocha de Moraes, 322 - Bragança Paulista - SP
            - CEP 12922-670
          </p>
        </Center>
      </CopyRight>
    </Container>
  );
};
