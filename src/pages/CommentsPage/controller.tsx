
import { useReducer } from 'react';

import { useAuthorsQuery } from './hooks/useAuthorsQuery';
import { useCommentsQuery } from './hooks/useCommentsQuery';

import { CommentsPageContext } from './common/contexts/CommentsPageContext';

import { LoaderSizes } from 'src/ts/enums/loader';

import initialState from './store/initialState';
import reducer from './store/reducer';
import ActionTypes from './store/actionTypes';

import processCommentsData from './helpers/processCommentsData';

import Loader from 'src/components/ui/Loader';
import CommentsPageView from './view';

export default function CommentsPage() {
    const [{
        prevPage,
        page,
        totalPages,
        totalComments,
        totalLikes,
        comments,
    }, dispatch] = useReducer(reducer, initialState);

    const {
        authorsQueryData,
        isAuthorsQueryError,
        isAuthorsQueryLoading,
    } = useAuthorsQuery();
    const {
        commentsQueryData,
        isCommentsQueryError,
        isCommentsQueryLoading,
    } = useCommentsQuery(page);

    if (page !== prevPage) {
        if (isCommentsQueryError || isAuthorsQueryError) {
            dispatch({ type: ActionTypes.FETCH_DATA_FAILURE });
        } else if (commentsQueryData && authorsQueryData) {
            const {
                data: commentsData,
                pagination: { total_pages }
            } = commentsQueryData;

            if (page === 1) {
                dispatch({ type: ActionTypes.SET_TOTAL_PAGES, payload: total_pages });
            }
    
            const { likesCount, commentsDataForRender } = processCommentsData(commentsData, authorsQueryData);

            dispatch({
                type: ActionTypes.FETCH_DATA_SUCCESS,
                payload: {
                    likesCount,
                    commentsCount: commentsData.length,
                    commentsDataForRender,
                }
            });
        }
    }

    const handleUploadCommentsClick = (): void => {
        dispatch({ type: ActionTypes.GO_TO_NEXT_PAGE });
    };

    const increaseTotalLikes = (): void => {
        dispatch({ type: ActionTypes.INCREASE_TOTAL_LIKES });
    };

    const decreaseTotalLikes = (): void => {
        dispatch({ type: ActionTypes.DECREASE_TOTAL_LIKES });
    };

    const pageContextValue = {
        increaseTotalLikes,
        decreaseTotalLikes,
    };

    const isLastPage = (page === totalPages);
    const isLoading = isCommentsQueryLoading || isAuthorsQueryLoading;
    const showLoader = isLoading && (page === 1);

    if (showLoader) {
        return <Loader size={LoaderSizes.Big} />;
    }

    return (
        <CommentsPageContext.Provider value={pageContextValue}>
            <CommentsPageView
                comments={comments}
                totalComments={totalComments}
                totalLikes={totalLikes}
                isLastPage={isLastPage}
                isLoading={isLoading}
                onUploadCommentsClick={handleUploadCommentsClick}
            />
        </CommentsPageContext.Provider>
    );
}