
export type TCommentDataForRender = {
    authorName: string;
    authorAvatar: string;
    likes: number;
    text: string;
    creationTime: string;
    parent: number | null;
}

export type TCommentsDataForRender = Array<{ id: number } & TCommentDataForRender>