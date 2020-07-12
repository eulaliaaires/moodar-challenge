import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import CategoryTag from '../CategoryTag';
import { ClockIcon, Container, DeleteIcon, Description, Duration, Image, Participants, PersonIcon, Text, Title, WrapDescription, WrapDetails, WrapTitle } from './styles';



export default function Action({ title, description, duration, participants, categoryColor, categoryTitle, selectedAction, id, remove, solicitated, getId, img }) {
    return (
        <Container>
            <WrapTitle>
                <Title>{title}</Title>
                {solicitated ?
                    <DeleteIcon onClick={() => { remove(true); getId(id) }}></DeleteIcon> :
                    null
                }
            </WrapTitle>
            <WrapDescription>
                {!solicitated ?
                    < Image src={img}></Image> : null
                }
                <Description>{description}</Description>
            </WrapDescription>
            <CategoryTag categoryColor={categoryColor} categoryTitle={categoryTitle} />
            <WrapDetails>
                <Tooltip title="duração" placement="right-start">
                    <Duration>
                        <ClockIcon />
                        <Text>{duration}</Text>
                    </Duration>
                </Tooltip>
                <Tooltip title="quantidade máxima de participantes" placement="right-start">
                    <Participants>
                        <PersonIcon />
                        <Text>{participants}</Text>
                    </Participants>
                </Tooltip>
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
