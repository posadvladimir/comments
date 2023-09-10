
import { advanceTo, clear } from 'jest-date-mock';

import getReadableCreationTime from '../getReadableCreationTime';

describe('getReadableCreationTime', () => {
    beforeEach(() => {
        advanceTo(new Date('2023-09-10T12:00:00Z')); // Задаем фиксированное текущее время
    });

    afterEach(() => {
        clear(); // Очищаем мокирование времени после каждого теста
    });

    test('возвращаeт разницу во времени в часах, если создано менее чем 24 часа назад', () => {
        const created = '2023-09-10T10:00:00Z'; // 2 часа назад
        expect(getReadableCreationTime(created)).toBe('2 часа назад');
    });

    test('возвращает полную дату и время, если создано более чем 24 часа назад', () => {
        const created = '2023-09-09T12:00:00Z';
        expect(getReadableCreationTime(created)).toBe('09.09.2023, 16:00:00');
    });
});