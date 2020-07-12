import React, { useEffect } from 'react';
import logo from '../../assets/imgs/logo-moodar.png';
import history from '../../services/history';
import SearchBar from '../SearchBar';
import { Avatar, AvatarIcon, Container, Logo, Menu, MenuItem } from './styles';



export default function Header({ actions, onChange, data }) {

    const solicitations = React.createRef();
    const action = React.createRef();


    useEffect(() => {
        const url = window.location.pathname.replace('/', '');
        const solicitationsText = solicitations.current.innerHTML.toLowerCase();
        const identSolicitationsText = solicitationsText.substring(solicitations.current.innerHTML.indexOf(' ') + 1).replace(/çõ/g, 'co');
        if (url === identSolicitationsText) {
            solicitations.current.style.color = '#2e9ae2';
        }
        else {
            action.current.style.color = '#2e9ae2';
        }

    })


    return (
        <Container>
            <a href="https://moodar.com.br/">
                <Logo src={logo} />
            </a>
            <Menu>
                <MenuItem ref={action} onClick={() => history.push('/')}>Ações</MenuItem>
                <MenuItem ref={solicitations} onClick={() => history.push({ pathname: 'solicitacoes', data: { actions } })}>Minhas Solicitações</MenuItem>
            </Menu>
            <Avatar>
                <AvatarIcon />
            </Avatar>
            <SearchBar onChange={onChange} />
        </Container>
    );
}


Header.propTypes = {

};

Header.defaultProps = {};
