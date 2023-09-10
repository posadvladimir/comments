
import { getRuNumberFormat } from '../getRuNumberFormat';

const testCases = [
    { input: 0, expected: '0' },
    { input: 1, expected: '1' },
    { input: 12, expected: '12' },
    { input: 123, expected: '123' },
    { input: 1_234, expected: '1\xa0234' },
    { input: 12_345, expected: '12\xa0345' },
    { input: 123_456, expected: '123\xa0456' },
    { input: 1_234_567, expected: '1\xa0234\xa0567' },
];

describe('getRuNumberFormat', () => {
    testCases.forEach(({ input, expected }) => {
        test(`число ${input} форматируется в правильном формате`, () => {
            const result = getRuNumberFormat(input);
            expect(result).toBe(expected);
        });
    });
});