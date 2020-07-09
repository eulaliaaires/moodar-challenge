import React from 'react';
import Action from '../../components/Action';
import Header from '../../components/Header';
import { Content } from './styles';

export default function Home() {
    return (
        <>
        <Header/>
        <Content>
            <Action title="Produtividade na quarentena" description="Etiam augue leo, pellentesque vitae ornare at, gravida eu nunc. Nullam mattis nisl diam, a accumsan eros scelerisque sit amet. Maecenas diam dui, mattis sed sem ut, congue gravida lectus. Praesent vitae elit nulla. Vestibulum dictum pellentesque ipsum sit amet cursus. Maecenas varius ipsum a nibh cursus gravida. Vestibulum placerat felis turpis, ac luctus tortor tristique ac. Praesent eu turpis lectus. Praesent placerat orci quis dolor mattis accumsan. Vestibulum at enim interdum, fermentum arcu eu, fringilla quam. Nullam aliquam dui sit amet varius bibendum. Curabitur odio mi, blandit a velit posuere, pharetra venenatis lorem. Nam auctor mattis vehicula. Sed tempus nisi vel sodales convallis. Nam imperdiet suscipit erat, vitae consectetur velit maximus vel. Morbi non mi sem.

    Curabitur euismod ornare mauris a volutpat. Duis porta dignissim augue quis vestibulum. Suspendisse ultrices mollis ipsum at convallis. Aenean mollis, nibh efficitur pretium iaculis, leo quam tincidunt nulla, id venenatis dui tellus id tellus. Sed volutpat dictum rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sem sem, finibus nec nunc sit amet, volutpat commodo augue. Nam sed ligula pulvinar, convallis massa vel, sollicitudin est. Etiam sit amet massa turpis. Fusce sed leo elit." duration="35min" participants="4 pessoas"></Action>
            <Action title="Como lidar com a Covid-19" description="ablubleblueblue" duration="35min" participants="4 partcipantes" categoryColor="#2e9ae2" categoryTitle="Treinamentos"></Action>
            <Action title="Gestão e liderança" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#e64149" categoryTitle="Treinamentos"></Action>
            <Action title="Worklife balance" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#8d4b93" categoryTitle="Webinar"></Action>
            <Action title="Auto-cuidado emocional" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#23cffd" categoryTitle="Webinar"></Action>
            <Action title="Como lidar com a Covid-19" description="ablubleblueblue" duration="35min" participants="4 pessoas" categoryColor="#5677c1" categoryTitle="Palestras presenciais"></Action>
        </Content>
        </>
    );
}


Home.propTypes = {

};

Home.defaultProps = {};
