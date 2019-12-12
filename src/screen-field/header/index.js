import React from 'react';
import * as Styled from './style';
import logo from '../../img/logo.svg';
import logoMobile from '../../img/logo.png';

const header = () => (
    <Styled.Header>
        <Styled.HeaderContent>
            <Styled.LogoBox>
                <img alt='Logo do Poalab' src={logo}/>
                <img alt='Logo mobile Poalab' src={logoMobile} />
            </Styled.LogoBox>
            <Styled.NavBar>
                <Styled.NavItem href="#About">Sobre</Styled.NavItem>
                <Styled.NavItem href="#Equipments">Equipamentos</Styled.NavItem>
                <Styled.NavItem href="#OpenDay">OpenDay</Styled.NavItem>
            </Styled.NavBar>
        </Styled.HeaderContent>
    </Styled.Header>
);


export default header;
