import Styled from 'styled-components';

export const footer = Styled.footer`
    padding: 15px 10px;
    background: #458C8C;
    height: 73px;

    left: 0;
    bottom: 0;
    width: 100%;
    `;

export const footerContent = Styled.div`
    display: flex;
    max-width: 800px;
    margin: 0px auto;
    justify-content: space-around;
    height: 100%;
`;


export const LogoBox = Styled.div`
    display: flex;
    align-items: center;
    width:80px;
    height: 100%;
    img {
        max-width: 100%;
    }
`;

export const title = Styled.b`
    position: relative;
    width: 87px;
    height: 40px;
    

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 2px;
    color: #FFFFFF;
    `;

export const content = Styled.b`
    position: relative;
    width: 87px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 8px;
    color: #FFFFFF;
`;

export const ifrs = Styled.b`
    position: relative;
    top: 10px;
    left: 10px;
    width: 87px;
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 8px;
    color: #FFFFFF;
`;







