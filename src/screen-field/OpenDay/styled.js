import Styled from 'styled-components';

export const Container= Styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    margin: 10px auto;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const imgContainer = Styled.div`
    width: 50%;
    max-width: 400px;
    img{
        max-width: 100%;
    }
    @media screen and (max-width: 780px) {
        width: 100%;
    }
`


export const textContainer = Styled.div`
    align-self: flex-end;
    margin: auto 10px;
    width: 50%;
    max-width: 600px;
    p{
        margin: 0px;
        
    }

    @media screen and (max-width: 780px) {
        width: 100%;
    }
`
