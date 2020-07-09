import PropTypes from 'prop-types';
import React from 'react';
import { ColorIndicator, Container, Title } from './styles';


export default function CategoryTag({ categoryTitle, categoryColor}) {
    return (
        <Container categoryColor={categoryColor}>
            <ColorIndicator categoryColor={categoryColor}/>
            <Title>{categoryTitle}</Title>
        </Container>
    );
}


CategoryTag.propTypes = {
    title: PropTypes.string.isRequired,
};

CategoryTag.defaultProps = {};
