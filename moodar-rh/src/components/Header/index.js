import React from 'react';
import logo from '../../assets/imgs/logo-moodar.png';
import history from '../../services/history';
import SearchBar from '../SearchBar';
import { Avatar, AvatarIcon, Container, Logo, Menu, MenuItem } from './styles';



export default function Header({ actions }) {
    console.log('a', actions);
    return (
        <Container>
            <a href="https://moodar.com.br/">
                <Logo src={logo} />
            </a>
            <Menu>
                <MenuItem>Categorias</MenuItem>
                <MenuItem onClick={() => history.push({ pathname: 'solicitacoes', data: { actions } })}>Minhas Solicitações</MenuItem>
            </Menu>
            <Avatar>
                <AvatarIcon />
            </Avatar>
            <SearchBar />
        </Container>
    );
}


Header.propTypes = {

};

Header.defaultProps = {};
