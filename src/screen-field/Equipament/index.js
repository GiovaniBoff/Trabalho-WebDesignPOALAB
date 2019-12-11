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

const Equipament = () => (
  <Cards title="Equipamentos" imgBackground={BackgroundImage} icon={Icon}>
    <Carousel>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bancada}
          alt="Bancada"
        />
        <Carousel.Caption>
          <h3>Bancada</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cma}
          alt="CMA"
        />
        <Carousel.Caption>
          <h3>CMA</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={filabot}
          alt="Filabot"
        />
        <Carousel.Caption>
          <h3>Filabot</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fresa}
          alt="Fresa"
        />
        <Carousel.Caption>
          <h3>Fresa</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plotterhp}
          alt="Plotterhp"
        />
        <Carousel.Caption>
          <h3>Plotter HP</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plottersaga}
          alt="Plotter Saga"
        />
        <Carousel.Caption>
          <h3>Plotter Saga</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={printrbot}
          alt="Printrbot"
        />
        <Carousel.Caption>
          <h3>Printrbot</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wanhao}
          alt="Wanhao"
        />
        <Carousel.Caption>
          <h3>Wanhao</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  </Cards>
);

export default Equipament;
