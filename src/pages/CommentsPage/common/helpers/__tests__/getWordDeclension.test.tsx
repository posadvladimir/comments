
import type { TDeclensionArray } from '../../ts/types/declensions';

import { getWordDeclension } from '../getWordDeclension';

const TEST_DECLENSIONS: TDeclensionArray = [
    'тест',
    'теста',
    'тестов'
];

const testCases = [
    { number: 1, expectedDeclension: 'тест' },
    { number: 2, expectedDeclension: 'теста' },
    { number: 5, expectedDeclension: 'тестов' },
    { number: 11, expectedDeclension: 'тестов' },
    { number: 21, expectedDeclension: 'тест' },
];

describe('Получение склонений для разных чисел комментариев', () => {
    testCases.forEach(({ number, expectedDeclension }) => {
        test(`для числа ${number} получено склонение "${expectedDeclension}"`, () => {
            const declension = getWordDeclension(number, TEST_DECLENSIONS);

            expect(declension).toBe(expectedDeclension);
        });
    });
});