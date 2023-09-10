
import { styled } from 'styled-components';

const BOTTOM_MARGIN = 64;
const BOTTOM_MARGIN_PHONE = 76;

export const CommentsPageWrapper = styled.div`
    max-width: 562px;
    min-width: 272px;
    margin: 52px 52px 0 52px;

    @media ${props => props.theme.media.phone} {
        margin: 32px 32px 0 32px;
    }
`;

export const CommentListWrapper = styled.div<{ $addPaddingBottom: boolean }>`
    max-height: 94%;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    ${({ $addPaddingBottom }) => $addPaddingBottom && `padding-bottom: ${BOTTOM_MARGIN}px;`}

    @media ${props => props.theme.media.phone} {
        ${({ $addPaddingBottom }) => $addPaddingBottom && `padding-bottom: ${BOTTOM_MARGIN_PHONE}px;`}
    }
`;

export const UploadCommentsButtonWrapper = styled.div`
    margin: 60px auto ${BOTTOM_MARGIN}px auto;
    display: flex;
    justify-content: center;

    @media ${props => props.theme.media.phone} {
        margin: 40px auto ${BOTTOM_MARGIN_PHONE}px auto;
    }
`;