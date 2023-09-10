
import { styled } from 'styled-components';

export const LikeCounterWrapper = styled.div`
    display: flex;
    line-height: 150%;
`;

export const LikeCounterButton = styled.button`
    cursor: pointer;

    &[disabled] {
        cursor: auto;
    }
`;

const LIKE_IMG_SIZE = 22;
const LIKE_IMG_SIZE_PHONE = 20;

export const LikeCounterButtonImg = styled.img`
    width: ${LIKE_IMG_SIZE}px;
    height: ${LIKE_IMG_SIZE}px;

    @media ${props => props.theme.media.phone} {
        width: ${LIKE_IMG_SIZE_PHONE}px;
        height: ${LIKE_IMG_SIZE_PHONE}px;
    }
`;

export const LikeCounterTotal = styled.span`
    margin-left: 8px;
    font-size: ${props => props.theme.default.fontSize - 1}px;
    font-weight: 700;

    @media ${props => props.theme.media.phone} {
        font-size: inherit;
    }
`;