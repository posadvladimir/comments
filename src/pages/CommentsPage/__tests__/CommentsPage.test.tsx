
import { render, screen } from '@testing-library/react';

import {
    COMMENT_TEST_ID,
    LOADER_TEST_ID,
    ERROR_TEST_ID,
} from 'src/constants/test-ids';

import authors from 'src/data/authors';
import { commentsPage1 } from 'src/data/comments';

import { useAuthorsQuery } from '../hooks/useAuthorsQuery';
import { useCommentsQuery } from '../hooks/useCommentsQuery';

import QCProvider from 'src/components/QCProvider';
import SCThemeProvider from 'src/components/SCThemeProvider';
import CommentsPage from '..';

const mockedUseAuthorsQuery = useAuthorsQuery as jest.Mock;
jest.mock('../hooks/useAuthorsQuery');

const mockedUseCommentsQuery = useCommentsQuery as jest.Mock;
jest.mock('../hooks/useCommentsQuery');

describe('CommentsPage', () => {
    test('отображается Loader', () => {
        mockedUseAuthorsQuery.mockImplementation(() => ({
            authorsQueryData: authors,
            isAuthorsQueryError: false,
            isAuthorsQueryLoading: true,
        }));

        mockedUseCommentsQuery.mockImplementation(() => ({
            commentsQueryData: commentsPage1,
            isCommentsQueryError: false,
            isCommentsQueryLoading: true,
        }));

        render(
            <QCProvider>
                <SCThemeProvider>
                    <CommentsPage />
                </SCThemeProvider>
            </QCProvider>
        );

        expect(screen.getByTestId(LOADER_TEST_ID)).toBeInTheDocument();
    });

    test('отображаются комментарии', () => {
        mockedUseAuthorsQuery.mockImplementation(() => ({
            authorsQueryData: authors,
            isAuthorsQueryError: false,
            isAuthorsQueryLoading: false,
        }));

        mockedUseCommentsQuery.mockImplementation(() => ({
            commentsQueryData: commentsPage1,
            isCommentsQueryError: false,
            isCommentsQueryLoading: false,
        }));

        render(
            <QCProvider>
                <SCThemeProvider>
                    <CommentsPage />
                </SCThemeProvider>
            </QCProvider>
        );

        const commentElements = screen.getAllByTestId(COMMENT_TEST_ID);

        expect(commentElements.length).toBe(commentsPage1.data.length);
    });

    test('отображается ошибка', () => {
        mockedUseAuthorsQuery.mockImplementation(() => ({
            authorsQueryData: authors,
            isAuthorsQueryError: false,
            isAuthorsQueryLoading: false,
        }));

        mockedUseCommentsQuery.mockImplementation(() => ({
            commentsQueryData: commentsPage1,
            isCommentsQueryError: true,
            isCommentsQueryLoading: false,
        }));

        render(
            <QCProvider>
                <SCThemeProvider>
                    <CommentsPage />
                </SCThemeProvider>
            </QCProvider>
        );

        expect(screen.getByTestId(ERROR_TEST_ID)).toBeInTheDocument();
    });
});