
import { v4 as uuidv4 } from 'uuid';

import type { TState, TAction } from './types';

import ActionTypes from './actionTypes';

import CommentList from '../components/CommentList';
import ErrorMessage from 'src/components/ui/ErrorMessage';

const reducer = (state: TState, action: TAction) => {
    switch (action.type) {
        case ActionTypes.GO_TO_NEXT_PAGE: {
            const { page } = state;

            return {
                ...state,
                isLoading: true,
                page: page + 1,
            };
        }
        case ActionTypes.SET_TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.payload,
            };
        }
        case ActionTypes.FETCH_DATA_SUCCESS: {
            const { totalLikes, totalComments, page } = state;
            const { likesCount, commentsCount, commentsDataForRender } = action.payload;

            return {
                ...state,
                totalLikes: totalLikes + likesCount,
                totalComments: totalComments + commentsCount,
                prevPage: page,
                isLoading: false,
                comments: [
                    ...state.comments,
                    <CommentList
                        commentsData={commentsDataForRender}
                        key={page}
                    />
                ],
            };
        }
        case ActionTypes.FETCH_DATA_FAILURE: {
            const { page, comments } = state;

            return {
                ...state,
                prevPage: page,
                isLoading: false,
                comments: [
                    ...comments,
                    <ErrorMessage key={uuidv4()} />
                ],
            };
        }
        case ActionTypes.INCREASE_TOTAL_LIKES: {
            const { totalLikes } = state;

            return {
                ...state,
                totalLikes: totalLikes + 1,
            };
        }
        case ActionTypes.DECREASE_TOTAL_LIKES: {
            const { totalLikes } = state;

            return {
                ...state,
                totalLikes: totalLikes - 1,
            };
        }
        default:
            return state;
    }
};

export default reducer;