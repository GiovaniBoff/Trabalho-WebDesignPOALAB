import Styled from 'styled-components';


export const Container = Styled.div`
    width: 100%;
    margin: 15px auto;
    padding: 40px;
    justify-content: space-around;
    background-image: url(${props => props.img});
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    &:nth-child(2){
        margin-top: 80px;
    }

    @media screen and (max-width: 450px) {
        padding: 15px;
    }
`

export const ContainerCard = Styled.div`
	max-width: 100vw;
	margin: 10px 10px;
	min-height: 360px;
	padding: 15px
	background-color: white;
    background: rgba(255, 255, 255, 0.7);
    @media screen and (max-width: 450px) {
        margin: 10px auto;
    }
`
export const CardTitle = Styled.h4`
    position: relative;
    margin: auto;
    width: 270px;
    padding: 5px 0;
    background-color: #458C8C;
    color: #ffff;
    text-align: center;
    max-width: 100%;
`
export const IconBox = Styled.div`
    position: absolute;
    width: 40px;
	display: flex;
	align-items: center;
	right: 15px;
	top: 0;
    bottom: 0;
    
    img {
        max-width: 100%;
    }
`;

