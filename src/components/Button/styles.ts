import styled from 'styled-components';
import { IButtonContainerStyled } from './types';


export const ButtonContainer = styled.button<IButtonContainerStyled>`
    width: 100%;
    height: 42px;
    background-color: ${(props) => props.disableButton ? '#B57BC7' : '#81259D'};
    color: #FFF;

    border: 1px solid ${(props) => props.disableButton ? '#B57BC7' : '#81259D'};
    border-radius: 21px;

    &:hover {
        opacity:${(props) => props.disableButton ? '' : '0.6'};
        cursor: ${(props) => props.disableButton ? 'not-allowed' : 'pointer'};
    }
`