
import type { TAuthorsData } from '../../common/ts/types/authors';

import getAuthorData from '../getAuthorData';

const testAuthorsData: TAuthorsData = [
    { id: 1, name: 'Автор 1', avatar: 'аватар1.jpg' },
    { id: 2, name: 'Автор 2', avatar: 'аватар2.jpg' },
];

describe('getAuthorData', () => {
    test('возвращаются данные автора, если автор существует', () => {
        const authorId = 1;
        const result = getAuthorData(testAuthorsData, authorId);
        const expected = { name: 'Автор 1', avatar: 'аватар1.jpg' };

        expect(result).toEqual(expected);
    });

    test('возвращаются данные по умолчанию, если автор не существует', () => {
        const authorId = 3;
        const result = getAuthorData(testAuthorsData, authorId);
        const expected = { name: 'Автор не найден', avatar: '' };

        expect(result).toEqual(expected);
    });
});