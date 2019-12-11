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
                <Styled.NavItem>Sobre</Styled.NavItem>
                <Styled.NavItem>Equipamentos</Styled.NavItem>
                <Styled.NavItem>Contatos</Styled.NavItem>
            </Styled.NavBar>
        </Styled.HeaderContent>
    </Styled.Header>
);


export default header;
