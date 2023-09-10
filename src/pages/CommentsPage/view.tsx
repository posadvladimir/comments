
import type { TCommentsPageViewProps } from './types';

import * as S from './styles';
import PageContainer from 'src/styles/pageContainer';

import Button from 'src/components/ui/Button';

import CommentsHeader from './components/CommentsHeader';

export default function CommentsPageView({
    totalComments,
    totalLikes,
    comments,
    isLastPage,
    isLoading,
    onUploadCommentsClick,
}: TCommentsPageViewProps) {
    const hideButton = (isLastPage && !isLoading);

    return (
        <PageContainer>
            <S.CommentsPageWrapper>
                <CommentsHeader
                    totalComments={totalComments}
                    likes={totalLikes}
                />
                <S.CommentListWrapper $addPaddingBottom={isLastPage}>
                    {comments}

                    {hideButton ? null : (
                        <S.UploadCommentsButtonWrapper>
                            <Button
                                onClick={onUploadCommentsClick}
                                text="Загрузить еще"
                                disabled={isLoading}
                                isLoading={isLoading}
                            />
                        </S.UploadCommentsButtonWrapper>
                    )}
                </S.CommentListWrapper>
            </S.CommentsPageWrapper>
        </PageContainer>
    );
}