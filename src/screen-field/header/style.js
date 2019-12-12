import Styled from 'styled-components';

export const Header = Styled.header`
    padding: 15px 10px;
    background: #458C8C;
    height: 73px;
    position: fixed;
    width: 100%;
    z-index: 2;
`;

export const HeaderContent = Styled.div`
    display: flex;
    max-width: 800px;
    margin: 0px auto;
    justify-content: space-around;
    height: 100%;
`;

export const NavBar = Styled.nav`
    display: flex;
    justify-content: flex-end;
    
    width: calc(100% - 80px);
`;

export const LogoBox = Styled.div`
    display: flex;
    align-items: center;
    width:80px;
    height: 100%;
    img {
        max-width: 100%;
    }
    img:nth-child(2) {
        display: none;
    }

    @media screen and (max-width: 450px) {
        img:nth-child(1) {
            display: none;
        }

        img:nth-child(2) {
            display: block;
            max-width: 40px;
        }
    }
`;

export const NavItem = Styled.a`
    padding: 10px 15px;
    transition: all ease-in 0.3s;
    color: inherit
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background: white;
        color: #458C8C;
    }
`;
