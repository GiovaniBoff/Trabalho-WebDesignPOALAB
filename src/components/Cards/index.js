import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const card = ({
    title, 
    children, 
    imgBackground,
    icon,
}) => (

    <>
        <Styled.Container img={imgBackground}>
            <Styled.ContainerCard>
                <Styled.CardTitle>
                    {title}
                    <Styled.IconBox>
                        <img alt="Icone" src={icon} />
                    </Styled.IconBox>
                </Styled.CardTitle>
                {children}
            </Styled.ContainerCard>     
        </Styled.Container>
    </>
);

card.propTypes = {
    title: PropTypes.string.isRequired,
    imgBackground: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    icon: PropTypes.string.isRequired
}

card.defaultProps = {
}

export default card;