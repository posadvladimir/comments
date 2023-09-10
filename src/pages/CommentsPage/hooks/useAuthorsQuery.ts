
import { useQuery } from 'react-query';

import type { TCustomQueryResult } from 'src/ts/types/react-query';
import type { TAuthorsData } from '../common/ts/types/authors';

import getAuthorsRequest from 'src/api/authors/getAuthorsRequest';

export const useAuthorsQuery = (): {
    authorsQueryData: TAuthorsData;
    isAuthorsQueryError: boolean;
    isAuthorsQueryLoading: boolean;
} => {
    const {
        data: authorsQueryData,
        isError: isAuthorsQueryError,
        isLoading: isAuthorsQueryLoading,
    } = useQuery('authors', getAuthorsRequest) as TCustomQueryResult<TAuthorsData>;

    return {
        authorsQueryData,
        isAuthorsQueryError,
        isAuthorsQueryLoading,
    };
}