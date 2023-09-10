

import { render, screen } from '@testing-library/react';

import { COMMENT_TEST_ID } from 'src/constants/test-ids';

import { runSnapshotTest } from 'src/common/tests/snapshot';

import SCThemeProvider from 'src/components/SCThemeProvider';
import CommentList from '..';

const testData = [
    {
        id: 1,
        authorName: 'Han Solo',
        authorAvatar: 'han-solo.jpg',
        likes: 5,
        text: 'Piu piu',
        creationTime: '2 часа назад',
        parent: null,
    },
    {
        id: 2,
        authorName: 'Yoda',
        authorAvatar: 'yoda.jpg',
        likes: 15,
        text: 'Noo',
        creationTime: '1 час назад',
        parent: 1,
    },
    {
        id: 3,
        authorName: 'Darth Wader',
        authorAvatar: 'dart-hwader.jpg',
        likes: 115,
        text: 'Ok',
        creationTime: '3 чаcа назад',
        parent: null,
    },
];

const commentListComponent = (
    <SCThemeProvider>
        <CommentList commentsData={testData} />
    </SCThemeProvider>
);

describe('Компонент Comment', () => {
    test('отображает комментарии корректно', () => {
        render(commentListComponent);

        const commentElements = screen.getAllByTestId(COMMENT_TEST_ID);

        expect(commentElements.length).toBe(testData.length);
    });

    runSnapshotTest(commentListComponent);
});