import { MdAccessTime, MdDelete, MdPersonOutline } from 'react-icons/md';
import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    // background-color: #DEDEDE;
    padding: 8px;
    // border-radius: 22px;
    border-bottom: 2px solid #DEDEDE;
    font-family: 'Raleway', sans-serif;

`;
export const Description = styled.p`
    font-size: 1.2rem;
    color: #000000;
`;
export const Title = styled.h1`
    font-size: 1.4rem;
    color: blue;
`;
export const Duration = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: fit-content;
`;
export const Participants = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
`;

export const ClockIcon = styled(MdAccessTime).attrs({
    color: '#000000',
    size: '1.4rem',
    // verticalAlign: 'middle',
})``;
export const PersonIcon = styled(MdPersonOutline).attrs({
    color: '#000000',
    size: '1.4rem',
    // verticalAlign: 'middle',

})``;
export const DeleteIcon = styled(MdDelete).attrs({
    color: '#000000',
    size: '1.4rem',
    // verticalAlign: 'middle',
    cursor: 'pointer',

})``;
export const Text = styled.p`
    font-size: 0.9rem;
    color: '#000000',
`;
export const WrapDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`;