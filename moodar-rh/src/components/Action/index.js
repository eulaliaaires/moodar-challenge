import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import CategoryTag from '../CategoryTag';
import { ClockIcon, Container, DeleteIcon, Description, Duration, Participants, PersonIcon, Text, Title, WrapDetails } from './styles';


export default function Action({ title, description, duration, participants, categoryColor, categoryTitle, selectedAction, id, remove, solicitated, getId }) {
    return (
        <Container>
            <Title>{title}</Title>
            {solicitated ?
                <DeleteIcon onClick={() => { remove(true); getId(id) }}></DeleteIcon> :
                null
            }
            <Description>{description}</Description>
            <CategoryTag categoryColor={categoryColor} categoryTitle={categoryTitle} />
            <WrapDetails>
                <Duration>
                    <ClockIcon />
                    <Text>{duration}</Text>
                </Duration>
                <Participants>
                    <PersonIcon />
                    <Text>{participants}</Text>
                </Participants>
            </WrapDetails>
            {
                !solicitated ?
                    <Button gradient buttonTitle="SOLICITAR" onClick={() => selectedAction(id)}></Button> :
                    null
            }
        </Container >
    );
}


Action.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

Action.defaultProps = {};
