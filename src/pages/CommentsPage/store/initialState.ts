
import type { TState } from './types';

const initialState: TState = {
    prevPage: 0,
    page: 1,
    isLoading: true,
    totalPages: 1,
    totalLikes: 0,
    totalComments: 0,
    comments: [],
}

export default initialState;