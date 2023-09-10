
import { styled } from 'styled-components';

const AVATAR_SIZE = 68;
const AVATAR_SIZE_PHONE = 40;
const AVATAR_MARGIN = 20;

export const CommentWrapper = styled.div<{ $addMarginLeft: boolean }>`
    margin-top: 32px;
    ${({ $addMarginLeft }) => $addMarginLeft ? `margin-left: 34px;` : ''}

    @media ${props => props.theme.media.phone} {
        margin-top: 24px;
        ${({ $addMarginLeft }) => $addMarginLeft ? `margin-left: 20px;` : ''}
    }
`;

export const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const AuthorAvatar = styled.img`
    object-fit: cover;
    width: ${AVATAR_SIZE}px;
    height: ${AVATAR_SIZE}px;
    border-radius: 50%;
    margin-right: ${AVATAR_MARGIN}px;

    @media ${props => props.theme.media.phone} {
        width: ${AVATAR_SIZE_PHONE}px;
        height: ${AVATAR_SIZE_PHONE}px;
    }
`;

export const CommentDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 12.5px 0;

    @media ${props => props.theme.media.phone} {
        margin: 0;
    }
`;

export const CommentCreationTime = styled.span`
    color: #8297AB;
`;

export const CommentText = styled.p`
    margin-left: ${AVATAR_SIZE + AVATAR_MARGIN}px;
    word-wrap: break-word;

    @media ${props => props.theme.media.phone} {
        margin-top: 8px;
        margin-left: ${AVATAR_SIZE_PHONE + AVATAR_MARGIN}px;
    }
`;