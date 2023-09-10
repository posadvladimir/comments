
import type { TComment } from '../types';
import type { TAuthorsData } from '../common/ts/types/authors';
import type { TCommentsDataForRender } from '../common/ts/types/comments';

import getAuthorData from './getAuthorData';
import getReadableCreationTime from './getReadableCreationTime';
import sortCommentsData from './sortCommentsData';

const processCommentsData = (
    commentsData: TComment[],
    authorsQueryData: TAuthorsData
): { likesCount: number, commentsDataForRender: TCommentsDataForRender } => {
    let likesCount = 0;
    let commentsDataForRender: TCommentsDataForRender = [];

    const sortedCommentsData = sortCommentsData(commentsData);

    sortedCommentsData.forEach(comment => {
        const {
            likes,
            author,
            id,
            text,
            created,
            parent,
        } = comment;

        likesCount += likes;

        const { name, avatar } = getAuthorData(authorsQueryData, author);

        const creationTime = getReadableCreationTime(created);

        commentsDataForRender.push({
            id,
            authorName: name,
            authorAvatar: avatar,
            likes,
            text,
            creationTime,
            parent,
        })
    })

    return { likesCount, commentsDataForRender };
};

export default processCommentsData;