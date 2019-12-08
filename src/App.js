import React from 'react';
import Header from './screen-field/header';
import Card from './screen-field/cards';

import './general.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <section className="delimiter">
        <Card title="Titulo"/>
      </section>
      
    </div>
   
  );
}

export default App;
