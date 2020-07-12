import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Action from '../../components/Action';
import Header from '../../components/Header';
import { DATA } from '../../services/api';
import { BackdropCustom, Content, ModalContent, ModalCustom, ModalTitle, StyledButton, useStyles, WrapButtons } from './styles';


export default function Solicitations(props) {

    const [actions, setActions] = useState([]);
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');

    const { data } = props.location;

    const classes = useStyles();


    const handleOpen = (bool) => {
        setOpen(bool);
    }
    const getId = (i) => {
        setId(i);
    }
    const deleteAction = () => {
        let aux = [];
        const index = actions.indexOf(id);
        aux = actions.splice(index, 1);
        setActions(aux);
        setOpen(false);
        saveToStorage();
        toast.info('SOLICITAÇÃO REMOVIDA COM SUCESSO', {
            position: toast.POSITION.TOP_RIGHT,
        });

    }

    const saveToStorage = () => {
        localStorage.setItem('list_actions', JSON.stringify(actions));
    }

    const changeValue = (e) => {
        setSearch(e.target.value);
    }
    const filteredActions = actions.filter(action => {
        return DATA[action].title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || DATA[action].categoryTitle.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    useEffect(() => {
        setActions(data.actions);
    }, [actions, data.actions]);


    const r = JSON.parse(localStorage.getItem('list_actions'));
    return (
        <>
            <Header onChange={changeValue} />
            <Content>
                {data === undefined || data.actions === undefined || data.actions.length === 0 ?
                    <p> Nenhuma solicitação no momento</p> :
                    <>
                        {filteredActions.map((item, index) => {
                            const object = DATA[item];
                            return (
                                <Action
                                    title={object.title}
                                    description={object.description}
                                    duration={object.duration}
                                    participants={object.participants}
                                    categoryColor={object.categoryColor}
                                    categoryTitle={object.categoryTitle}
                                    remove={handleOpen}
                                    id={item}
                                    getId={getId}
                                    key={object.title}
                                    solicitated>
                                </Action>
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
