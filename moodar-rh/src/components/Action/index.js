import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import CategoryTag from '../CategoryTag';
import { ClockIcon, Container, Description, Duration, Participants, PersonIcon, Text, Title, WrapDetails } from './styles';


export default function Action({ title, description, duration, participants, categoryColor, categoryTitle }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CategoryTag categoryColor={categoryColor} categoryTitle={categoryTitle}/>
            <WrapDetails>
            <Duration>
                <ClockIcon/>
                <Text>{duration}</Text>
            </Duration>
            <Participants>
                <PersonIcon/>
                <Text>{participants}</Text>
            </Participants>
            </WrapDetails>
            <Button buttonTitle="SOLICITAR"></Button>
        </Container>
    );
}


Action.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

Action.defaultProps = {};
