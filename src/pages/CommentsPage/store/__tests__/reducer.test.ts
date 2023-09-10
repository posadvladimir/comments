
import type { TAction, TState } from '../types';

import reducer from '../reducer';
import ActionTypes from '../actionTypes';

describe('reducer', () => {
    test('страница увеличивается на 1 и isLoading становится true при action GO_TO_NEXT_PAGE', () => {
        const action: TAction = {
            type: ActionTypes.GO_TO_NEXT_PAGE,
        };

        const { page, isLoading } = reducer(initialState, action);

        expect(page).toEqual(initialState.page + 1);
        expect(isLoading).toEqual(true);
    });

    test('устанавливается totalPages при action SET_TOTAL_PAGES', () => {
        const testTotalPages = 3;

        const action: TAction = {
            type: ActionTypes.SET_TOTAL_PAGES,
            payload: testTotalPages,
        };

        const { totalPages } = reducer(initialState, action);

        expect(totalPages).toEqual(testTotalPages);
    });

    test('правильно меняются данные при action FETCH_DATA_SUCCESS', () => {
        const testLikesCount = 20;
        const testCommentsCount = 10;

        const action: TAction = {
            type: ActionTypes.FETCH_DATA_SUCCESS,
            payload: {
                likesCount: testLikesCount,
                commentsCount: testCommentsCount,
                commentsDataForRender: [{
                    id: 1,
                    authorName: 'Han Solo',
                    authorAvatar: 'han-solo.jpg',
                    likes: 0,
                    text: 'Piu piu',
                    creationTime: '3 часа назад',
                    parent: null,
                }],
            },
        };

        const {
            totalLikes,
            totalComments,
            prevPage,
            page,
            isLoading,
        } = reducer(initialState, action);

        expect(totalLikes).toEqual(initialState.totalLikes + testLikesCount);
        expect(totalComments).toEqual(initialState.totalComments + testCommentsCount);
        expect(prevPage).toEqual(page);
        expect(isLoading).toEqual(false);
    });

    test('правильно меняются данные при action FETCH_DATA_FAILURE', () => {
        const action: TAction = { type: ActionTypes.FETCH_DATA_FAILURE };

        const {
            prevPage,
            page,
            isLoading,
        } = reducer(initialState, action);

        expect(prevPage).toEqual(page);
        expect(isLoading).toEqual(false);
    });

    test('увеличивается на 1 totalLikes при action INCREASE_TOTAL_LIKES', () => {
        const action: TAction = { type: ActionTypes.INCREASE_TOTAL_LIKES };

        const { totalLikes } = reducer(initialState, action);

        expect(totalLikes).toEqual(initialState.totalLikes + 1);
    });

    test('уменьшается на 1 totalLikes при action DECREASE_TOTAL_LIKES', () => {
        const action: TAction = { type: ActionTypes.DECREASE_TOTAL_LIKES };

        const { totalLikes } = reducer(initialState, action);

        expect(totalLikes).toEqual(initialState.totalLikes - 1);
    });
});

const initialState: TState = {
    prevPage: 0,
    page: 1,
    isLoading: false,
    totalPages: 1,
    totalLikes: 200,
    totalComments: 20,
    comments: []
};