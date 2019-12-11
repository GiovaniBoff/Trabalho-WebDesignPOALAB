import React from 'react';
import * as Styled from './style';
import ifrs from '../../img/ifrs.svg';
import youtube from '../../img/youtube.svg';
import fb from '../../img/fb.svg';

const footer = () => (
    <Styled.footer>
        <Styled.footerContent>           
            <Styled.title><p>Endereço:</p>
                <Styled.content>
                    R. Cel. Vicente, 281- Centro Histórico, Porto Alegre - RS, 90030-041 
                </Styled.content>
            </Styled.title>

            <Styled.title><p>Coordenação:</p>
                <Styled.content>
                     André Peres
                     andre.peres@poa.ifrs.edu.br
                </Styled.content>  
            </Styled.title>
            <Styled.title>Extensão:                  
                <Styled.LogoBox>
                    <img alt='Logo do ifrs' src={ifrs}/>
                    <Styled.ifrs>Instituto Federal Rio Grande do Sul</Styled.ifrs> 
                </Styled.LogoBox>
            </Styled.title>
            <Styled.title>Follow:
                <Styled.LogoBox>
                    <img alt='Logo do youtube' src={youtube} />
                    <img alt='Logo do fb' src={fb} />
                </Styled.LogoBox>
            </Styled.title>
        </Styled.footerContent>
    </Styled.footer>
);





export default footer;
