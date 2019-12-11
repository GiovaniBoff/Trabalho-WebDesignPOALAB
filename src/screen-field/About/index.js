import * as React from 'react';
import ImagePoaLab from '../../img/poalab.jpg'
import Cards from '../../components/Cards';
import BackgroundImage from '../../img/laserWooden.jpg';
import Icon from '../../img/aboutIcon.svg';
import * as Styled from './styled';
const About = () => (
    <Cards title="Sobre" imgBackground={BackgroundImage} icon={Icon}>
         <Styled.Container>
            <img src={ImagePoaLab}/>
            <p>
                O POALAB é um laboratório de fabricação digital
                e está conectado à rede mundial de fab labs.
                Opera como um programa de extensão do
                IFRS campus Porto Alegre.
        
                Temos como missão popularizar o acesso
                e letramento na fabricação digital,
                funcionando como uma plataforma de criatividade,
                aprendizagem e invenção.

                Ser um Fab Lab significa estar conectado
                a uma comunidade mundial de alunos, educadores,
                técnicos, pesquisadores e inovadores e desenvolver
                atividades dentro da filosofia do conhecimento aberto.

                Conheça a FAB CHARTER
                A Carta de Intenções que regra os Fab Labs  
            </p>
        </Styled.Container>
    </Cards>
);

export default About;