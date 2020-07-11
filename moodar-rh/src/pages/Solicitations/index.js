import React, { useEffect, useState } from 'react';
import Action from '../../components/Action';
import Header from '../../components/Header';
import { DATA } from '../../services/api';
import { BackdropCustom, Content, ModalContent, ModalCustom, ModalTitle, StyledButton, useStyles, WrapButtons } from './styles';

export default function Solicitations(props) {

    const [actions, setActions] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');
    console.log('aqui', actions)
    const { data } = props.location;
    console.log('here', data.actions);
    const classes = useStyles();
    console.log(classes);

    const handleOpen = (bool) => {
        setOpen(bool);
    }
    const getId = (i) => {
        setId(i);
    }
    const deleteAction = () => {
        console.log('id', id);
        console.log('acti', actions);
        let aux = [];
        const index = actions.indexOf(id);
        console.log('index', index);
        aux = actions.splice(index, 1);
        console.log('ax', aux);
        setActions(aux);
        setOpen(false);

    }

    useEffect(() => {
        setActions(data.actions);

    }, [actions])

    return (
        <>
            <Header />
            <Content>
                {data === undefined || data.actions.length === 0 ?
                    <p> Nenhuma solicitação no momento</p> :
                    <>
                        {actions.map((item, index) => {
                            const object = DATA[item];
                            return (
                                <Action title={object.title} description={object.description} duration={object.duration} participants={object.participants} categoryColor={object.categoryColor} categoryTitle={object.categoryTitle} remove={handleOpen} id={item} getId={getId} solicitated></Action>
                            )
                        })}
                    </>
                }
                <ModalCustom
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    closeAfterTransition
                    onClose={() => setOpen(false)}
                    open={open}
                    BackdropComponent={BackdropCustom}
                >
                    <ModalContent className={classes.paper}>
                        <ModalTitle>Você realmente deseja cancelar a solicitação desta ação?</ModalTitle>
                        <WrapButtons>
                            <StyledButton background="#e64149" buttonTitle="NÃO" onClick={() => setOpen(false)}></StyledButton>
                            <StyledButton buttonTitle="SIM" onClick={() => deleteAction(id)}></StyledButton>
                        </WrapButtons>
                    </ModalContent>
                </ModalCustom>
            </Content>
        </>
    );
}


Solicitations.propTypes = {

};

Solicitations.defaultProps = {};
