
import type { TComment } from '../../types';

import sortCommentsData from '../sortCommentsData';

describe('sortCommentsData', () => {
    test('сортируются комментарии без родителя по времени создания в убывающем порядке', () => {
        const comments: TComment[] = [
            {
                id: 1,
                created: '2023-09-10T12:00:00',
                text: 'Комментарий 1',
                author: 1,
                parent: null,
                likes: 5,
            },
            {
                id: 2,
                created: '2023-09-10T13:00:00',
                text: 'Комментарий 2',
                author: 2,
                parent: null,
                likes: 2,
            },
        ];

        const sortedComments = sortCommentsData(comments);

        expect(sortedComments).toEqual([comments[1], comments[0]]);
    });

    test('сортируются дочерние комментарии по времени создания в возрастающем порядке и размещаются за родительскими', () => {
        const comments: TComment[] = [
            {
                id: 1,
                created: '2023-09-10T12:00:00',
                text: 'Родительский комментарий',
                author: 1,
                parent: null,
                likes: 5,
            },
            {
                id: 2,
                created: '2023-09-10T14:00:00',
                text: 'Дочерний комментарий 1',
                author: 2,
                parent: 3,
                likes: 2,
            },
            {
                id: 3,
                created: '2023-09-10T13:00:00',
                text: 'Дочерний комментарий 2',
                author: 3,
                parent: 1,
                likes: 3,
            },
        ];

        const sortedComments = sortCommentsData(comments);

        expect(sortedComments).toEqual([comments[0], comments[2], comments[1]]);
    });
});