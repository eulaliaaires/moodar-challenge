import React from 'react';
import { Container } from './styles';


export default function Button({ buttonTitle, onClick, gradient, background }) {
    return (
        <Container onClick={onClick} gradient={gradient} background={background}>
            {buttonTitle}
        </Container>
    );
}


Button.propTypes = {

};

Button.defaultProps = {};
