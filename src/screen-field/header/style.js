import Styled from 'styled-components';

export const Header = Styled.header`
    padding: 15px 10px;
    background: #458C8C;
    height: 73px;
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
`;

export const NavItem = Styled.a`
    padding: 10px 15px;
`;
