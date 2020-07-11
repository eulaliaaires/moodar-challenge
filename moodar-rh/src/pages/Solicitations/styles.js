import { Backdrop, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '../../components/Button';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 105px 25px 0 25px ;
`;
export const ModalCustom = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const BackdropCustom = styled(Backdrop)`
  .root {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 18px;
    width: 50%;
    height: 250px;
    border: none;
    outline: none;
`;
export const ModalTitle = styled.h1`
    font-size: 1.3rem;
    color: #000000;
    text-align: center;
`;
export const WrapButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding-bottom: 50px;
`;
export const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        //   border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export const StyledButton = styled(Button).attrs({
    backgroundColor: '#8cba4e',
})``;
