
import { styled } from 'styled-components';

export const Button = styled.button`
    width: 234px;
    background: #313439;
    border-radius: 4px;
    padding: 8px 0;
    transition: background .1s ease;
    position: relative;

    &:hover {
        background: #1f2023;
    }

    &:active {
        background: #17171a;
    }

    &[disabled] {
        cursor: auto;
        background: #494949;
        color: #8a8a8a;
    }
`;

export const ButtonText = styled.span`
    color: inherit;
    line-height:  ${props => props.theme.default.lineHeight}px;
`;