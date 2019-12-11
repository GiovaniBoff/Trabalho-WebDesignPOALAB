import React from 'react';
import LazyLoad from 'react-lazyload';
import {Spinner} from 'react-bootstrap';
import Header from './screen-field/header';
import About from './screen-field/About';
import OpenDay from './screen-field/OpenDay';
import Equipament from './screen-field/Equipament';
import Footer from './screen-field/footer';
import './general.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <section className="delimiter">
        <LazyLoad offset={-180} height="420" placeholder={<Spinner animation="border"/>}>
          <About />
        </LazyLoad>
        <LazyLoad offset={-180} height="420" placeholder={<Spinner animation="border"/>}>
          <Equipament />
        </LazyLoad>
        <LazyLoad offset={-180} height="420" placeholder={<Spinner animation="border"/>}>
          <OpenDay />
        </LazyLoad>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
