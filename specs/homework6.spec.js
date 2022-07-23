import { sumScores } from "../src/homework6";

describe('ДЗ 6', () => {
    test.each([
        { scores: { a: 1, b: 2 }, expected: 3 },
        { scores: { a: 10, b: 0, c: 5 }, expected: 15 },
    ])('sumScores(), корректные данные, объект $scores, ожидаемый результат $expected', ({ scores, expected }) => {
        expect(sumScores(scores)).toEqual(expected);
    });

    test.each([
        { scores: { a: 1, b: -2 } },
        { scores: { a: '1', b: 2 } },
        { scores: { a: 6, b: '' } },
        { scores: { a: null, b: 2 } },
        { scores: {} },
    ])('sumScores(), некорректные данные, объект $scores', ({ scores }) => {
        expect(() => sumScores(scores)).toThrow();
    });
});
