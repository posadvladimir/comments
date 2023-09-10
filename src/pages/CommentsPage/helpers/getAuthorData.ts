
import type { TAuthorsData, TAuthorData } from '../common/ts/types/authors';

const getAuthorData = (authorsData: TAuthorsData, authorId: number): Omit<TAuthorData, 'id'> => {
    const author = authorsData.find(({ id }) => id === authorId);

    if (author) {
        const { name, avatar } = author;

        return { name, avatar };
    }
    return { name: 'Автор не найден', avatar: '' };
}

export default getAuthorData;