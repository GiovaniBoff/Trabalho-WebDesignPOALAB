import * as React from 'react';
import AboutComponent from './AboutComponent'
import Cards from '../../components/Cards';
import BackgroundImage from '../../img/laserWooden.jpg';
import Icon from '../../img/aboutIcon.svg';
const About = () => (
    <Cards title="Sobre" imgBackground={BackgroundImage} icon={Icon}>
        <AboutComponent/>
    </Cards>
);

export default About;