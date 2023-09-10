
import type { LikeIconStates } from '../../common/ts/enums/likeIconStates';

export type TLikeCounterProps = {
    likes: number;
    iconState?: LikeIconStates;
    disabled?: boolean;
}