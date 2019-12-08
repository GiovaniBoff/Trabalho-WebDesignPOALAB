import React from 'react';
import Header from './screen-field/header';
import About from './screen-field/About';

import './general.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <section className="delimiter">
        <About />
      </section>
      
    </div>
   
  );
}

export default App;
