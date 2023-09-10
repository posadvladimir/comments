
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-size: ${props => props.theme.default.fontSize}px;
        font-weight: 400;
        color: #FFF;

        @media ${props => props.theme.media.phone} {
            font-size: 14px;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;

export default Global;