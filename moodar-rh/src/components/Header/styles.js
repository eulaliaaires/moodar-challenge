import { MdPerson } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #FFFFFF;
    height: 85px;
    position: fixed;
    top: 0;
    padding: 0 0 0 25px;
    font-family: 'Raleway', sans-serif;
    -webkit-box-shadow: 0px 1px 3px 0px rgba(222,222,222,1);
-moz-box-shadow: 0px 1px 3px 0px rgba(222,222,222,1);
box-shadow: 0px 1px 3px 0px rgba(222,222,222,1);
`;
export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #fcfcfa;
    width: 40px;
    height: 40px;
    background-color: #e0dfda;
    right: 45px;
    position: absolute;
`;
export const AvatarIcon = styled(MdPerson).attrs({
    color: '#FFFFFF',
    size: '1.4rem',
})``;
export const Logo = styled.img`
    width: 150px;
    heigth: 150px;
    cursor: pointer;
 `;
export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    position: absolute;
    right: 285px;
    margin: 0 55px;
   
 `;

export const MenuItem = styled.li`
    display: flex;
    color: #000000;
    cursor: pointer;
    margin-right: 15px;
    &:hover{
        color: #2e9ae2;
    }
    .active{
        color: #2e9ae2;
    }
 `;
