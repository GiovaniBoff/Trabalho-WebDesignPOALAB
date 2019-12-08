import React from 'react';
import Cards from '../../components/Cards';
import BackgroundImage from '../../img/laserWooden.jpg';
import Icon from '../../img/engineIcon.svg';

const About = () => (
    <Cards title="Sobre" imgBackground={BackgroundImage} icon={Icon}>
        <p>Foi no about</p>
        <p>Aqui fica</p>
    </Cards>
);

export default About;