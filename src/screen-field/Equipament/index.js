import * as React from "react";
import Cards from "../../components/Cards";
import Icon from "../../img/engineIcon.svg";
import BackgroundImage from "../../img/3d.jpg";
import Carousel from "react-bootstrap/Carousel";
import bancada from "../../img/fotos-poalab/bancada.png";
import cma from "../../img/fotos-poalab/cma6040.png";
import filabot from "../../img/fotos-poalab/filabot.png";
import fresa from "../../img/fotos-poalab/fresa1.png";
import plotterhp from "../../img/fotos-poalab/plotterhp.png";
import plottersaga from "../../img/fotos-poalab/plottersaga.png";
import printrbot from "../../img/fotos-poalab/printrbot.png";
import wanhao from "../../img/fotos-poalab/wanhao.png";
import * as Styled from "./style";

const Equipament = () => (
  <Cards title="Equipamentos" imgBackground={BackgroundImage} icon={Icon}>
    <Styled.container>
      <Carousel
        interval="1000"
        pauseOnHover="true"
        style={{
          width: "100%"
        }}
      >
        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={bancada} alt="Bancada" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <li><h3>Bancada de Eletrônica</h3></li>
                    <li>osciloscópio</li>
                    <li>fonte de bancada</li>
                    <li>estação de solda</li>
                    <li>componentes eletrônicos diversos</li>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>


        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={cma} alt="CMA" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <li><h5>1 Cortadora Laser</h5></li>
                    <li><h3>CMA6040</h3></li>
                    <li>área de corte de 60cm x 40cm</li>
                    <li>potência do laser: 70-80w</li>
                    <li>espessura do corte: 0-25mm para acrílico</li>
                    <li>precisão &lt; 0.01mm </li>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>


        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={filabot} alt="Filabot" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <li><h5>1 Extrusora de filamento</h5></li>
                    <li><h3>Filabot Wee</h3></li>
                    <li>bico de extrusão de 1.75mm</li>
                    <li>adequado para ABS e PLA</li>
                    <li>taxa de estrusão entre 13 e 51 cm/min</li>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>

        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={fresa} alt="Fresa" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <li><h5>1 Fresadora</h5></li>
                    <li><h3>MTC-200×250</h3></li>
                    <li>área: 200mm x 250mm</li>
                    <li>eixo z: 150mm</li>
                    <li>refrigeração do motor a ar</li>
                    <li>velocidade de rotação programável</li>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>

        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={plotterhp} alt="Plotterhp" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <li><h5>1 plotter de impressão</h5></li>
                    <li><h3>HP T520</h3></li>
                    <li>alimentação por rolo ou folha</li>
                    <li>largura de impressão: 61cm</li>
                    <li>espessura: até 11.8 milésimos de polegada</li>
                    <li>resolução de impressão: 2400 x 1200 dpi</li>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>

        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={plottersaga} alt="Plotter Saga" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <li><h5>1 ploter de recorte</h5></li>
                    <li><h3>SAGA 720i</h3></li>
                    <li>largura máxima da mídia: 72cm</li>
                    <li>largura máxima de corte: 62cm</li>
                    <li>laser point</li>
                    <li>velocidade: 600mm/s</li>
                    <li>precisão de repetição: 0.082mm</li>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>

        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={printrbot} alt="Printrbot" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <li><h5>1 impressora 3D</h5></li>
                    <li><h3>Printrbot Simple Metal</h3></li>
                    <li>filamento de 1.75mm</li>
                    <li>resolução de camada entre 0.1 e 0.5mm</li>
                    <li>área de trabalho: 152mm x 152mm x 152mm</li>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>

        <Carousel.Item>
          <Styled.container>
            <Styled.imgContainer>
              <img src={wanhao} alt="Wanhao" />
            </Styled.imgContainer>
            <Styled.textContainer>
                <Styled.stiledList>
                    <h3>2 Impressoras 3D Wanhao</h3>
                    <p>2 extrusores</p>
                    <p>filamento 1.75mm</p>
                    <p>camada entre 0.1 e 0.5mm</p>
                    <p>área: 225mm x 145mm x 150mm</p>
                    <p>base aquecida</p>
                </Styled.stiledList>
            </Styled.textContainer>
          </Styled.container>
        </Carousel.Item>
      </Carousel>
    </Styled.container>
  </Cards>
);

export default Equipament;
