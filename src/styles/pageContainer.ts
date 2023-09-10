
import { styled } from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;   
    max-width: 1366px;
    margin: 0 auto;
    background: rgba(12, 13, 15, 0.30);

    @media ${props => props.theme.media.phone} {
        background: none;
    }
`;

export default PageContainer;