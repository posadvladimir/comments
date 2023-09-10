
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { LIKE_COUNTER_BUTTON_TEST_ID, LIKE_COUNTER_TOTAL_TEST_ID } from 'src/constants/test-ids';

import { LikeIconStates } from 'src/pages/CommentsPage/common/ts/enums/likeIconStates';

import SCThemeProvider from 'src/components/SCThemeProvider';
import LikeCounter from '..';

const LIKES_TOTAL = 1234;

const iconTestData = [
    { iconState: LikeIconStates.GreyStroke, expectedSrc: 'grey-stroke.png' },
    { iconState: LikeIconStates.RedStroke, expectedSrc: 'red-stroke.png' },
    { iconState: LikeIconStates.FullRed, expectedSrc: 'full-red.png' },
];

const getlikeCounterComponent = (likes: number, iconState: LikeIconStates, disabled = false): JSX.Element => (
    <SCThemeProvider>
        <LikeCounter
            likes={likes}
            iconState={iconState}
            disabled={disabled}
        />
    </SCThemeProvider>
)

const renderLikeCounter = (likes: number, iconState: LikeIconStates, disabled = false) => {
    render(getlikeCounterComponent(likes, iconState, disabled));
};

describe('LikeCounter', () => {
    test.each(iconTestData)('отображается правильная иконка для %s', ({ iconState, expectedSrc }) => {
        renderLikeCounter(1, iconState);

        const likeImgElement = screen.getByAltText('like icon');

        expect(likeImgElement).toHaveAttribute('src', expectedSrc);
    });

    test('отображает количество лайков в правильном формате', () => {    
        renderLikeCounter(LIKES_TOTAL, LikeIconStates.GreyStroke);
    
        const formattedLikes = screen.getByText('1 234');
    
        expect(formattedLikes).toBeInTheDocument();
    });

    test('переключается иконка лайка при клике', () => {
        renderLikeCounter(LIKES_TOTAL, LikeIconStates.RedStroke);

        const likeButton = screen.getByTestId(LIKE_COUNTER_BUTTON_TEST_ID);
        const likeImgElement = screen.getByAltText('like icon');

        userEvent.click(likeButton);

        expect(likeImgElement).toHaveAttribute('src', 'full-red.png');
    });

    test('переключается иконка лайка при двойном клике', () => {
        renderLikeCounter(LIKES_TOTAL, LikeIconStates.RedStroke);

        const likeButton = screen.getByTestId(LIKE_COUNTER_BUTTON_TEST_ID);
        const likeImgElement = screen.getByAltText('like icon');

        userEvent.click(likeButton);
        userEvent.click(likeButton);

        expect(likeImgElement).toHaveAttribute('src', 'red-stroke.png');
    });

    test('не меняется иконка лайка при дизейбле', () => {
        renderLikeCounter(LIKES_TOTAL, LikeIconStates.GreyStroke, true);

        const likeButton = screen.getByTestId(LIKE_COUNTER_BUTTON_TEST_ID);
        const likeImgElement = screen.getByAltText('like icon');

        userEvent.click(likeButton);

        expect(likeImgElement).toHaveAttribute('src', 'grey-stroke.png');
    });

    test('увеличивается значение кол-ва лайков', () => {
        renderLikeCounter(LIKES_TOTAL, LikeIconStates.RedStroke);

        const likeButton = screen.getByTestId(LIKE_COUNTER_BUTTON_TEST_ID);
        const likeTotalElement = screen.getByTestId(LIKE_COUNTER_TOTAL_TEST_ID);

        userEvent.click(likeButton);

        expect(likeTotalElement).toHaveTextContent('1 235');
    });

    test('возвращается к исходному значению кол-во лайков при двойном клике', () => {
        renderLikeCounter(LIKES_TOTAL, LikeIconStates.RedStroke);

        const likeButton = screen.getByTestId(LIKE_COUNTER_BUTTON_TEST_ID);
        const likeTotalElement = screen.getByTestId(LIKE_COUNTER_TOTAL_TEST_ID);

        userEvent.click(likeButton);
        userEvent.click(likeButton);

        expect(likeTotalElement).toHaveTextContent('1 234');
    });

    test('не меняется значение кол-ва лайков при дизейбле', () => {
        renderLikeCounter(LIKES_TOTAL, LikeIconStates.GreyStroke, true);

        const likeButton = screen.getByTestId(LIKE_COUNTER_BUTTON_TEST_ID);
        const likeTotalElement = screen.getByTestId(LIKE_COUNTER_TOTAL_TEST_ID);

        userEvent.click(likeButton);

        expect(likeTotalElement).toHaveTextContent('1 234');
    });

    test.each(iconTestData)('соотвествует снепшоту', ({ iconState }) => {
        const tree = renderer.create(getlikeCounterComponent(1234, iconState)).toJSON();

        expect(tree).toMatchSnapshot();
    });
});