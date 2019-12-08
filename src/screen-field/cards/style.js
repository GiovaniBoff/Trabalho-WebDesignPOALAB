import Styled from 'styled-components';


export const Container = Styled.div`
        width: 100%;
        max-heigth: 540px;
        /* margin: 100px auto; */
        padding: 20px;
        justify-content: space-around;
        background-image: url(${props => props.img});
        background-position: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        &:first-child{
                margin-top: 100px;

        }
`


export const ContainerCard = Styled.div`
        max-width: 100vw;
        margin: 10px 10px;
        padding: 20vh;
        background-color: white;
        
`
export const CardTitle = Styled.h4`   
        display:flex;
        margin: -150px auto 0 auto;
        width: 270px;
        heigth: 0px;
        justify-content:center;
        padding: 5px 0 0 0;
        background-color: #458C8C;
        color: #ffff;
`

export const CardImage = Styled.div`
        position:rela;
        float:left;
        width: 300px;
        heigth: 300px;
        padding: 100px;
        background: blue;
        
`

