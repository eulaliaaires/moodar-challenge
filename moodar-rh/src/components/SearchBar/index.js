import React from 'react';
import { Container, Input, SearchIcon } from './styles';



export default function SearchBar({ buttonTitle }) {
    return (
        <Container >
            <SearchIcon />
            <Input placeholder="Buscar por ação ou categoria" />
        </Container>


    );
}


SearchBar.propTypes = {

};

SearchBar.defaultProps = {};
