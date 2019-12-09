import React from 'react';
import Header from './screen-field/header';
import About from './screen-field/About';
import Footer from './screen-field/footer';

import './general.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <section className="delimiter">
        <About />
      </section>
      <Footer/>
    </div>
   
  );
}

export default App;
