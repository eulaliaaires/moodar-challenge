import React from 'react';
import { Container } from './styles';


export default function Button({ buttonTitle }) {
    return (
        <Container>
            {buttonTitle}
        </Container>
    );
}


Button.propTypes = {
    
};

Button.defaultProps = {};
