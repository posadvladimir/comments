
import type { TCommentsHeaderProps } from './types';

import { LikeIconStates } from '../../common/ts/enums/likeIconStates';

import { COMMENT_DECLENSIONS } from './constants';

import { getRuNumberFormat } from '../../common/helpers/getRuNumberFormat';
import { getWordDeclension } from '../../common/helpers/getWordDeclension';

import { BoldSpan } from '../../common/styles/boldSpan';
import * as S from './styles';

import LikeCounter from '../LikeCounter';

const CommentsHeader: React.FC<TCommentsHeaderProps> = ({
    totalComments,
    likes,
}) => (
    <>
        <S.CommentsHeaderWrapper>
            <BoldSpan>{getRuNumberFormat(totalComments)} {getWordDeclension(totalComments, COMMENT_DECLENSIONS)}</BoldSpan>
            <LikeCounter
                likes={likes}
                iconState={LikeIconStates.GreyStroke}
                disabled
            />
        </S.CommentsHeaderWrapper>
    </>
);

export default CommentsHeader;