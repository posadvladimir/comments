
import type { TCommentDataForRender } from '../../common/ts/types/comments';

import { COMMENT_TEST_ID } from 'src/constants/test-ids';

import { BoldSpan } from '../../common/styles/boldSpan';
import * as S from './styles';

import LikeCounter from '../LikeCounter';

const Comment: React.FC<TCommentDataForRender> = ({
    authorName,
    authorAvatar,
    likes,
    text,
    creationTime,
    parent,
}) => (
    <S.CommentWrapper
        $addMarginLeft={Boolean(parent)}
        data-testid={COMMENT_TEST_ID}    
    >
        <S.CommentHeader>
            <S.AuthorAvatar
                src={authorAvatar}
                alt="author avatar"
            />
            <S.CommentDetails>
                <BoldSpan>{authorName}</BoldSpan>
                <S.CommentCreationTime>{creationTime}</S.CommentCreationTime>
            </S.CommentDetails>
            <LikeCounter likes={likes} />
        </S.CommentHeader>
        <S.CommentText>{text}</S.CommentText>
    </S.CommentWrapper>
);

export default Comment;