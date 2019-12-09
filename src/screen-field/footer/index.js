import React from 'react';
import * as Styled from './style';
import ifrs from '../../img/ifrs.svg';
import youtube from '../../img/youtube.svg';
import fb from '../../img/fb.svg';

const footer = () => (
    <Styled.footer>
        <Styled.footerContent>
            <Styled.Titulo>Contatos:</Styled.Titulo>
            <Styled.Titulo>Endereço:</Styled.Titulo>
            <Styled.Titulo>Coordenação:</Styled.Titulo>
            <Styled.Titulo>Extensão:
                <Styled.LogoBox>
                    <img alt='Logo do ifrs' src={ifrs} /><Styled.conteudo>Instituto Federal Rio Grande do Sul</Styled.conteudo>
                </Styled.LogoBox>
            </Styled.Titulo>
            <Styled.Titulo>Follow:
                <Styled.LogoBox>
                    <img alt='Logo do youtube' src={youtube} />
                    <img alt='Logo do fb' src={fb} />
                </Styled.LogoBox>
            </Styled.Titulo>
        </Styled.footerContent>
    </Styled.footer>
);





export default footer;
