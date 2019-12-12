import React from 'react';
import * as Styled from './style';
import logo from '../../img/logo.svg';

const header = (props) => (
    <Styled.Header>
        <Styled.HeaderContent>
            <Styled.LogoBox>
                <img alt='Logo do Poalab' src={logo}/> 
            </Styled.LogoBox>
            <Styled.NavBar>
                <Styled.NavItem href="#About">Sobre</Styled.NavItem>
                <Styled.NavItem href="#Equipments">Equipamentos</Styled.NavItem>
                <Styled.NavItem href="#OpenDay">Open day</Styled.NavItem>
            </Styled.NavBar>
        </Styled.HeaderContent>
    </Styled.Header>
);


export default header;
