
import { render, screen } from '@testing-library/react';

import { getLikeIcon } from '../helpers';

import { LikeIconStates } from 'src/pages/CommentsPage/common/ts/enums/likeIconStates';

const testData = [
    { state: LikeIconStates.GreyStroke, expectedSrc: 'grey-stroke.png' },
    { state: LikeIconStates.RedStroke, expectedSrc: 'red-stroke.png' },
    { state: LikeIconStates.FullRed, expectedSrc: 'full-red.png' },
];

describe('getLikeIcon', () => {
    test.each(testData)('вставляется правильная иконка для %s', ({ state, expectedSrc }) => {
        render(
            <img
                src={getLikeIcon(state)}
                alt="like icon"
            />
        );

        const imgElement = screen.getByAltText('like icon');

        expect(imgElement).toHaveAttribute('src', expectedSrc);
    });
});