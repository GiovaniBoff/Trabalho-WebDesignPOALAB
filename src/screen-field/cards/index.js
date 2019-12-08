import React from 'react';
import * as Styled from './style';
import imgPoaLab from '../../img/laserWooden.jpg'

const card = ({title}) => (

    <>
        <Styled.Container img = {imgPoaLab}>
            <Styled.ContainerCard>
                <Styled.CardTitle>
                    {title}
                </Styled.CardTitle>
                <Styled.CardImage/>
            </Styled.ContainerCard>     
        </Styled.Container>
    </>




);

export default card;