
import { render, screen } from '@testing-library/react';

import { runSnapshotTest } from 'src/common/tests/snapshot';

import SCThemeProvider from 'src/components/SCThemeProvider';
import CommentsHeader from '..';

const COMMENTS_TOTAL = 5000;
const LIKES_TOTAL = 1000;

const commentsHeaderComponent = (
    <SCThemeProvider>
        <CommentsHeader
            totalComments={COMMENTS_TOTAL}
            likes={LIKES_TOTAL}
        />
    </SCThemeProvider>
);

const renderCommentsHeader = (): void => {
    render(commentsHeaderComponent);
};

describe('CommentsHeader', () => {
    test('отображает количество комментариев в правильном формате', () => {    
        renderCommentsHeader();

        const formattedComments = screen.getByText('5 000 комментариев');

        expect(formattedComments).toBeInTheDocument();
    });

    test('отображает количество лайков в правильном формате', () => {    
        renderCommentsHeader();
    
        const formattedLikes = screen.getByText('1 000');
    
        expect(formattedLikes).toBeInTheDocument();
    });

    runSnapshotTest(commentsHeaderComponent);
});