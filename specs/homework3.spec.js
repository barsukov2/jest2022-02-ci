import { fullTrim, nameIsValid } from '../src/homework3';

describe('Здесь могла бы быть ваша реклама', () => {
  /**
   * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
   * которая удаляет пробелы и табуляторы в начале и конце строки.
   */
  test('тримминг для пробела в начале слова', () => {
    expect(fullTrim(' домашка')).toEqual('домашка');
  });
  test('тримминг для табуляции в начале слова', () => {
    expect(fullTrim(' домашка')).toEqual('домашка');
  });
  test('тримминг для пробела в конце слова', () => {
    expect(fullTrim('домашка ')).toEqual('домашка');
  });
  test('тримминг для табуляции в конце слова', () => {
    expect(fullTrim('домашка  ')).toEqual('домашка');
  });
  test('тримминг для табуляции в середине строки', () => {
    expect(fullTrim('123  домашка')).toEqual('123  домашка');
  });
  test('тримминг для пробела в середине строки', () => {
    expect(fullTrim('это домашка')).toEqual('это домашка');
  });
  test('тримминг для пустой строки', () => {
    expect(fullTrim('')).toEqual('');
  });
  test('тримминг для строка = пробел', () => {
    expect(fullTrim(' ')).toEqual('');
  });
  test('тримминг для строка = табуляция', () => {
    expect(fullTrim(' ')).toEqual('');
  });
  test('тримминг для двух пробелов в начале слова', () => {
    expect(fullTrim('  домашка')).toEqual('домашка');
  });
  test('тримминг для двух табуляций в конце слова', () => {
    expect(fullTrim('домашка    ')).toEqual('домашка');
  });


  /**
   * Напишите параметризированный unit (describe.each`table`) тест для функции,
   * которая проверяет валидность кличек котиков.
   * Кличка считается валидной, если она соответствует следующим условиям:
   * 1) Кличка содержит минимум два символа;
   * 2) Кличка не пустая;
   * 3) Кличка не содержит пробелов.

   Обратите внимание, в примере приведен обычный тест.
   Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
   */
  test.each([
    {name: 'Rw', expected: true, case: 'имя два символа'},
    {name: 'И', expected: false, case: 'имя один символ'},
    {name: 'Им;', expected: true, case: 'имя три символа'},
    {name: '', expected: false, case: 'имя пустое'},
    {name: ' Им8', expected: false, case: 'имя с пробелом в начале'},
    {name: 'Имя 123', expected: false, case: 'имя с пробелом в середине'},
    {name: 'Имя ', expected: false, case: 'имя с пробелом в конце'},
    {name: 123, expected: false, case: 'имя как число'},
  ])('проверка клички, кейс ${case}', ({ name, expected }) => {
    expect(nameIsValid(name)).toEqual(expected);
  });
});