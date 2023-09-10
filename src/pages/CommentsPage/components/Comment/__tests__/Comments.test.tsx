
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { LIKE_COUNTER_TEST_ID } from 'src/constants/test-ids';

import { runSnapshotTest } from 'src/common/tests/snapshot';

import SCThemeProvider from 'src/components/SCThemeProvider';
import Comment from '..';

const mockCommentData = {
    authorName: 'Han Solo',
    authorAvatar: 'han-solo.jpg',
    likes: 10,
    text: 'Piu piu',
    creationTime: '3 часа назад',
    parent: null,
};

const getCommentComponent = (parent: number | null) => (
    <SCThemeProvider>
        <Comment
            {...mockCommentData}
            parent={parent}
        />
    </SCThemeProvider>
);

const renderComment = (parent: number | null):void => {
    render(getCommentComponent(parent));
};

describe('Компонент Comment', () => {
    test('отображается имя автора', () => {
        renderComment(null);

        const authorNameElement = screen.getByText(mockCommentData.authorName);

        expect(authorNameElement).toBeInTheDocument();
    });

    test('отображается текст комментария', () => {
        renderComment(null);

        const commentTextElement = screen.getByText(mockCommentData.text);

        expect(commentTextElement).toBeInTheDocument();
    });

    test('отображается время создания комментария', () => {
        renderComment(null);

        const creationTimeElement = screen.getByText(mockCommentData.creationTime);

        expect(creationTimeElement).toBeInTheDocument();
    });

    test('отображается компонент LikeCounter', () => {
        renderComment(null);

        const likeCounterElement = screen.getByTestId(LIKE_COUNTER_TEST_ID);

        expect(likeCounterElement).toBeInTheDocument();
    });

    test('не добавляется margin-left, если значение prop parent falsy', () => {
        const tree = renderer.create(
            <SCThemeProvider>
                <Comment {...mockCommentData} />
            </SCThemeProvider>
        ).toJSON();

        expect(tree).not.toHaveStyleRule('margin-left', '34px');
    });

    test('добавляется margin-left равное 34px, если значение prop parent определенно', () => {
        const tree = renderer.create(
            <SCThemeProvider>
                <Comment
                    {...mockCommentData}
                    parent={200}
                />
            </SCThemeProvider>
        ).toJSON();

        expect(tree).toHaveStyleRule('margin-left', '34px');
    });

    runSnapshotTest(getCommentComponent(null));

    // отображается комментарий с левым отступом (дочерний)
    runSnapshotTest(getCommentComponent(200));
});