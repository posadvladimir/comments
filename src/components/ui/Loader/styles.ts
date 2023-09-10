
import { LoaderSizes } from 'src/ts/enums/loader';

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SPINNER_WIDTH_DIVIDER = 5.5;

export const LoaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
`;

export const LoaderSpinner = styled.div<{ $size: LoaderSizes }>`
    content: " ";
    display: block;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: 50%;
    border: ${({ $size }) => ($size / SPINNER_WIDTH_DIVIDER)}px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
`;