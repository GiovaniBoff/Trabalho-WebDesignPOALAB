import Styled from 'styled-components';

export const stiledList = Styled.ul`
    list-style: none;
`

export const container = Styled.div`
    display:flex;
    width: 100%;
    padding:10px;
    margin: 15px auto;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media screen and (max-width: 780px) {
        width: 100%;
    }
`

export const textContainer = Styled.div`
        /* max-width: 600px; */
        width: 50%;
        padding: 0 15px;
        h3{
            color:black;
        }
        p{
            color: black;
            margin:0px;
        }
        @media screen and (max-width: 780px) {
        width: 100%;
    }
`

export const imgContainer = Styled.div `
    width: 50%;
    height:300px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* max-width: 400px;
    max-height: 300px;
    height: auto;
    width: auto;
    justifyContent: flex-end; */
    img{
        max-width:100%;
        max-height:400px;
    }
    @media screen and (max-width: 780px) {
        width: 100%;
        
    }

`