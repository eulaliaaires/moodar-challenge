import React, { useEffect, useState } from 'react';
import Action from '../../components/Action';
import Header from '../../components/Header';
import { DATA } from '../../services/api';
import { Content } from './styles';
const aux = [1, 2, 3];
export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(DATA);
    });

    const updateSelectedActions = (id) => {
        console.log('entrou aqui');
        aux.push(id);
        console.log('foi', aux);
    }

    return (
        <>
            <Header actions={aux} />
            <Content>
                {data.map((item, index) => {
                    return (
                        <Action
                            title={item.title}
                            description={item.description}
                            duration={item.duration}
                            participants={item.participants}
                            categoryColor={item.categoryColor}
                            categoryTitle={item.categoryTitle}
                            id={index}
                            selectedAction={updateSelectedActions}>
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
