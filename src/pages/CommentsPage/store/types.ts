
import type { TCommentsDataForRender } from '../common/ts/types/comments';
import type { TComments } from '../types';
import type ActionTypes from './actionTypes';

export type TState = {
    prevPage: number;
    page: number;
    isLoading: boolean;
    totalPages: number;
    totalLikes: number;
    totalComments: number;
    comments: TComments;
}

type TFetchDataSuccessPayload = {
    likesCount: number;
    commentsCount: number;
    commentsDataForRender: TCommentsDataForRender;
}

export type TAction =
    { type: ActionTypes.GO_TO_NEXT_PAGE }
    | { type: ActionTypes.SET_TOTAL_PAGES, payload: number }
    | { type: ActionTypes.FETCH_DATA_SUCCESS, payload: TFetchDataSuccessPayload }
    | { type: ActionTypes.FETCH_DATA_FAILURE }
    | { type: ActionTypes.INCREASE_TOTAL_LIKES }
    | { type: ActionTypes.DECREASE_TOTAL_LIKES };