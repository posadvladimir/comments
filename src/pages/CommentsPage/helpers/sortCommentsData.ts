
import type { TComment } from '../types';

const sortCommentsData = (comments: TComment[]): TComment[] => {
    // Получаем отсортированный массив комментариев без родителя с временем по возрастанию
    const sortedCommentsData = (
        comments
            .filter(({ parent }) => !parent)
            .sort((commentA, commentB) => (new Date(commentB.created).getTime()) - (new Date(commentA.created).getTime()))
    );

    // Получаем отсортированный массив дочерних комментариев с временем по убыванию
    const sortedChildCommentsData = (
        comments
            .filter(({ parent }) => parent)
            .sort((commentA, commentB) => (new Date(commentA.created).getTime()) - (new Date(commentB.created).getTime()))
    );

    // Для каждого дочернего комментария ищем родительский и вставляем за родителем
    sortedChildCommentsData.forEach(childComment => {
        const { parent } = childComment;

        const parentIndex = sortedCommentsData.findIndex(({ id }) => id === parent);
        sortedCommentsData.splice(parentIndex + 1, 0, childComment);
    });

    return sortedCommentsData;
};

export default sortCommentsData;