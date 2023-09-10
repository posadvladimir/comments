
export type TComments = Array<JSX.Element>

export type TCommentsPageViewProps = {
    comments: TComments;
    totalComments: number;
    totalLikes: number;
    isLastPage: boolean;
    isLoading: boolean;
    onUploadCommentsClick: () => void;
}

export type TComment = {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
}

export type TCommentsData = {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    },
    data: TComment[];
}