import React from 'react';
import { Container, Input, SearchIcon } from './styles';



export default function SearchBar({ buttonTitle, onChange }) {
    return (
        <Container >
            <SearchIcon />
            <Input placeholder="Buscar por ação ou categoria" onChange={(e) => onChange(e)} id="inpt" />
        </Container>


    );
}


SearchBar.propTypes = {

};

SearchBar.defaultProps = {};
