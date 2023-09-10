
import type { TDeclensionArray } from '../ts/types/declensions';

export const getWordDeclension = (number: number, declensions: TDeclensionArray): string => {
    let n = Math.abs(number);

    n %= 100;
    if (n >= 5 && n <= 20) {
        return declensions[2];
    }

    n %= 10;
    if (n === 1) {
        return declensions[0];
    }

    if (n >= 2 && n <= 4) {
        return declensions[1];
    }

    return declensions[2];
};