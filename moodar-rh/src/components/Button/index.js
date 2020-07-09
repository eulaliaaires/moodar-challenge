import React from 'react';
import { Container } from './styles';


export default function Button({ buttonTitle, onClick }) {
    return (
        <Container onClick={onClick}>
            {buttonTitle}
        </Container>
    );
}


Button.propTypes = {

};

Button.defaultProps = {};
