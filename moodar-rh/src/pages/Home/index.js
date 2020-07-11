import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Action from '../../components/Action';
import Header from '../../components/Header';
import { DATA } from '../../services/api';
import { Content } from './styles';
const aux = [];

export default function Home() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setData(DATA);
    });

    const updateSelectedActions = (id) => {
        console.log('entrou aqui');
        if (aux.indexOf(id) === -1) {
            aux.push(id);
            console.log('foi', aux);
            toast.info('AÇÃO SOLICITADA COM SUCESSO', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else {
            toast.error('Esta ação já foi solicitada', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    }
    const input = document.getElementById('inpt');
    const changeValue = (e) => {
        setSearch(e.target.value);
    }
    const filteredActions = data.filter(action => {
        return action.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || action.categoryTitle.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    return (
        <>
            <Header actions={aux} onChange={changeValue} />
            <Content>
                {/* < ToastContainer /> */}
                {filteredActions.map((item, index) => {
                    return (
                        <Action
                            title={item.title}
                            description={item.description}
                            duration={item.duration}
                            participants={item.participants}
                            categoryColor={item.categoryColor}
                            categoryTitle={item.categoryTitle}
                            img={item.src}
                            id={index}
                            selectedAction={updateSelectedActions}
                        >
                        </Action>
                    )
                })}
            </Content>
        </>
    );
}


Home.propTypes = {

};

Home.defaultProps = {};
