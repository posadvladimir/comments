
import type { TDeclensionArray } from '../common/ts/types/declensions';

import { getWordDeclension } from '../common/helpers/getWordDeclension';

const MILLISECONDS_PER_HOUR = 3_600_000;
const HOUR_DECLENSIONS: TDeclensionArray = [
    'час',
    'часа',
    'часов'
];

const getReadableCreationTime = (created: string): string => {
    const inputDate = new Date(created);

    const nowTimestamp = new Date().getTime();
    const inputTimestamp = inputDate.getTime();

    const hoursDifference = Math.floor((nowTimestamp - inputTimestamp) / MILLISECONDS_PER_HOUR);

    if (hoursDifference < 24) {
        return `${hoursDifference} ${getWordDeclension(hoursDifference, HOUR_DECLENSIONS)} назад`;
    }
    
    return inputDate.toLocaleDateString() + ', ' + inputDate.toLocaleTimeString('ru-RU');
};

export default getReadableCreationTime;