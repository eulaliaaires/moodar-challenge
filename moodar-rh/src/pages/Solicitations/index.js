import React, { useEffect, useState } from 'react';
import Action from '../../components/Action';
import Header from '../../components/Header';
import { Content } from './styles';
// const a = [1, 2, 4];
export default function Solicitations(props) {
    const [actions, setActions] = useState(undefined);
    console.log('aqui', actions)
    const { data } = props.location;
    console.log('here', data);
    useEffect(() => {
        setActions(data);
    })
    return (
        <>
            <Header />
            <Content>
                {actions === undefined ?
                    <p> Nenhuma solicitação no momento</p> :
                    <>
                        <Action title="Como lidar com a Covid-19" description="ablubleblueblue" duration="35min" participants="4 partcipantes" categoryColor="#2e9ae2" categoryTitle="Treinamentos"></Action>
                        <Action title="Gestão e liderança" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#e64149" categoryTitle="Treinamentos"></Action>
                        <Action title="Worklife balance" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#8d4b93" categoryTitle="Webinar"></Action>
                        <Action title="Auto-cuidado emocional" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#23cffd" categoryTitle="Webinar"></Action>
                        <Action title="Como lidar com a Covid-19" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#5677c1" categoryTitle="Palestras presenciais"></Action>
                    </>
                }
            </Content>
        </>
    );
}


Solicitations.propTypes = {

};

Solicitations.defaultProps = {};
