import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    height: 25px;
    border: 1px solid;
    border-color: ${props => props.categoryColor };
    border-radius: 20px;
    color: ${props => props.categoryColor};
    padding: 0 6px;
    font-family: 'Raleway', sans-serif;

`;
export const ColorIndicator = styled.div`
    display: flex;
    border-radius: 50%;
    background-color: ${props => props.categoryColor};
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;
export const Title = styled.p`
    font-size: 0.9rem;
`;
