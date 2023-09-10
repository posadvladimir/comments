
import { useQuery } from 'react-query';

import type { TCustomQueryResult } from 'src/ts/types/react-query';
import type { TCommentsData } from '../types';

import getCommentsRequest from 'src/api/comments/getCommentsRequest';

export const useCommentsQuery = (page: number): {
    commentsQueryData: TCommentsData;
    isCommentsQueryError: boolean;
    isCommentsQueryLoading: boolean;
} => {
    const {
        data: commentsQueryData,
        isError: isCommentsQueryError,
        isLoading: isCommentsQueryLoading,
    } = useQuery(['comments', page], () => getCommentsRequest(page)) as TCustomQueryResult<TCommentsData>;

    return {
        commentsQueryData,
        isCommentsQueryError,
        isCommentsQueryLoading,
    };
}