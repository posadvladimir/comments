
import { useState, useContext } from 'react';

import type { TLikeCounterProps } from './types';

import { CommentsPageContext } from '../../common/contexts/CommentsPageContext';

import { LikeIconStates } from '../../common/ts/enums/likeIconStates';

import {
    LIKE_COUNTER_TEST_ID,
    LIKE_COUNTER_BUTTON_TEST_ID,
    LIKE_COUNTER_TOTAL_TEST_ID,
} from 'src/constants/test-ids';

import { getRuNumberFormat } from '../../common/helpers/getRuNumberFormat';
import { getLikeIcon } from './helpers';

import * as S from './styles';

export default function LikeCounter({
    likes,
    iconState = LikeIconStates.RedStroke,
    disabled,
}: TLikeCounterProps) {
    const [isClicked, setIsClicked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const { increaseTotalLikes, decreaseTotalLikes } = useContext(CommentsPageContext);

    const handleLikeToggle = () => {
        if (!isClicked) {
            setIsClicked(true);
        }

        if (!isLiked) {
            setIsLiked(true);
            increaseTotalLikes();
        } else {
            setIsLiked(false);
            decreaseTotalLikes();
        }
    };

    let likesCount = likes;
    let likeIconState = iconState;

    if (isClicked && isLiked) {
        likesCount++;
        likeIconState = LikeIconStates.FullRed;
    }
    if (isClicked && !isLiked && (likeIconState === LikeIconStates.FullRed)) {
        likesCount--;
        likeIconState = LikeIconStates.RedStroke;
    }

    return (
        <S.LikeCounterWrapper data-testid={LIKE_COUNTER_TEST_ID}>
            <S.LikeCounterButton
                onClick={handleLikeToggle}
                disabled={disabled}
                data-testid={LIKE_COUNTER_BUTTON_TEST_ID}
            >
                <S.LikeCounterButtonImg
                    src={getLikeIcon(likeIconState)}
                    alt="like icon"
                />
            </S.LikeCounterButton>
            <S.LikeCounterTotal data-testid={LIKE_COUNTER_TOTAL_TEST_ID}>
                {getRuNumberFormat(likesCount)}
            </S.LikeCounterTotal>
        </S.LikeCounterWrapper>
    );
}