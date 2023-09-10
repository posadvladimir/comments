
import { createContext } from 'react';

type TPageContext = {
    increaseTotalLikes: () => void;
    decreaseTotalLikes: () => void;
}

export const CommentsPageContext = createContext<TPageContext>({
    increaseTotalLikes: () => null,
    decreaseTotalLikes: () => null,
});