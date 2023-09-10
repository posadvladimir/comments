
import { styled } from 'styled-components';

import background from '../assets/background.jpeg'

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: url(${background}) lightgray 28% / cover no-repeat;
`;

export default AppWrapper;