import React from 'react';
import Cards from '../../components/Cards';
import BackgroundImage from '../../img/hand.jpg';
import Icon from '../../img/openDayIcon.svg';
import ImagePoaLab from '../../img/DSC_4946.jpg';
import * as Styled from './styled';
const OpenDay = () => (
    <Cards id="OpenDay" title="Open Day" imgBackground={BackgroundImage} icon={Icon}>
        <Styled.Container>
            <Styled.imgContainer>
                <img alt='Imagem Laboratorio PoaLab' src={ImagePoaLab}/>
            </Styled.imgContainer>
            <Styled.textContainer>
                <p>
                    Nos open days a comunidade externa têm a possibilidade de conhecer
                    as ferramentas existentes no lab e aprender sobre fabricação digital.
                    Não existe custo para acessar o lab ou utilizar as máquinas;
                    Não existe reserva de equipamento;
                    Os usuários são convidados a cadastrar os seus
                    projetos no sistema de projetos do PoaLab para
                    compartilhamento com a comunidade;
                    Os usuários devem trazer os insumos necessários
                    para os projetos;
                    Temos material, equipamento, pessoal e disposição
                    para atender a todos, independente de conhecimento;
                    O objetivo do lab é o de disseminar conhecimento
                    -- se você não tem nenhum conhecimento sobre fabricação digital,
                    o lab foi feito pra você.

                    Continua com dúvidas? Mande mensagem via email ou via página do facebook !
                </p>
            </Styled.textContainer>  
        </Styled.Container>



    </Cards>
);

export default OpenDay;