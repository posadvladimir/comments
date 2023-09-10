
import { LikeIconStates } from '../../common/ts/enums/likeIconStates';

import greyStrokeLikeIcon from 'src/assets/likes/grey-stroke.png';
import redStrokeLikeIcon from 'src/assets/likes/red-stroke.png';
import fullRedLikeIcon from 'src/assets/likes/full-red.png';

const likeIcons: Record<LikeIconStates, string> = {
    [LikeIconStates.GreyStroke]: greyStrokeLikeIcon,
    [LikeIconStates.RedStroke]: redStrokeLikeIcon,
    [LikeIconStates.FullRed]: fullRedLikeIcon,
};

export const getLikeIcon = (likeIcon: LikeIconStates): string => {
    return likeIcons[likeIcon];
};