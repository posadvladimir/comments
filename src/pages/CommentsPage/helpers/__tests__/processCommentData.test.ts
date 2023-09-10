
import processCommentsData from '../processCommentsData';

const commentsData = [
    {
        id: 1,
        created: '2023-09-10T12:00:00Z',
        text: 'Комментарий 1',
        author: 1,
        parent: null,
        likes: 5,
    },
    {
        id: 2,
        created: '2023-09-10T11:00:00Z',
        text: 'Комментарий 2',
        author: 2,
        parent: null,
        likes: 10,
    },
];

const authorsData = [
    { id: 1, name: 'Автор 1', avatar: 'аватар1.jpg' },
    { id: 2, name: 'Автор 2', avatar: 'аватар2.jpg' },
];

describe('processCommentsData', () => {
    test('корректно обрабатываются данные комментариев', () => {
        const result = processCommentsData(commentsData, authorsData);

        expect(result.likesCount).toBe(15);
        expect(result.commentsDataForRender).toEqual([
            {
                id: 1,
                authorName: 'Автор 1',
                authorAvatar: 'аватар1.jpg',
                likes: 5,
                text: 'Комментарий 1',
                creationTime: expect.any(String),
                parent: null,
            },
            {
                id: 2,
                authorName: 'Автор 2',
                authorAvatar: 'аватар2.jpg',
                likes: 10,
                text: 'Комментарий 2',
                creationTime: expect.any(String),
                parent: null,
            },
        ]);
    });
});