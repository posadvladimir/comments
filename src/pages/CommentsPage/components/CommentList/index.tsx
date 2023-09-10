
import type { TCommentListProps } from './types';

import Comment from '../Comment';

const CommentList: React.FC<TCommentListProps> = ({
    commentsData,
}) => (
    <>
        {commentsData.map(({ id, ...props }) => (
            <Comment
                key={id}
                {...props}
            />
        ))}
    </>
);

export default CommentList;