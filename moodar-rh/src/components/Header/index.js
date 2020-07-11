import React, { useEffect, useState } from 'react';
import logo from '../../assets/imgs/logo-moodar.png';
import history from '../../services/history';
import SearchBar from '../SearchBar';
import { Avatar, AvatarIcon, Container, Logo, Menu, MenuItem } from './styles';



export default function Header({ actions, onChange }) {

    const category = React.createRef();
    const solicitations = React.createRef();
    const [categoryActive, setCategoryActive] = useState(false);
    const [solicitationActive, setSolicitationActive] = useState(false);



    useEffect(() => {
        const url = window.location.pathname.replace('/', '');
        const categoryText = category.current.innerHTML.toLowerCase();
        const solicitationsText = solicitations.current.innerHTML.toLowerCase();
        const identSolicitationsText = solicitationsText.substring(solicitations.current.innerHTML.indexOf(' ') + 1).replace(/çõ/g, 'co');

        if (url === categoryText) {
            setCategoryActive(true);

        }
        else if (url === identSolicitationsText) {
            solicitations.current.style.color = '#2e9ae2';
            setSolicitationActive(true);

        }

    })


    return (
        <Container>
            <a href="https://moodar.com.br/">
                <Logo src={logo} />
            </a>
            <Menu>
                <MenuItem ref={category} className={categoryActive ? 'active' : ''}>Categorias</MenuItem>
                <MenuItem ref={solicitations} className={solicitationActive ? 'active' : ''} onClick={() => history.push({ pathname: 'solicitacoes', data: { actions } })}>Minhas Solicitações</MenuItem>
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
