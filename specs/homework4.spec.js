import {kolobok, newYear} from "../src/homework4";

describe('ДЗ 4', () => {
  /**
   * В src/homework4.js напишите функцию "Колобок" и тесты к ней здесь.
   * Функция на вход принимает имя персонажа,
   * например, "дедушка", а в ответ возвращает, текстовую строку.
   * Значение текстовой строки - какой был результат взаимодействия Колобка с данным персонажем.
   * Например, "дедушка" - "Я от дедушки ушел".
   * В функции используйте конструкцию switch - https://learn.javascript.ru/switch
   */

  test.each([
    {name: 'дедушка', expected: 'Я от дедушки ушел'},
    {name: 'бабушка', expected: 'Я от бабушки ушел'},
    {name: 'заяц', expected: 'Я от зайца ушел'},
    {name: 'волк', expected: 'Я от волка ушел'},
    {name: 'медведь', expected: 'Я от медведя ушел'},
    {name: 'лиса', expected: 'Я от лисы не ушел'},
  ])('kolobok(), корректные данные,  кейс "$name"', ({ name, expected }) => {
      expect(kolobok(name)).toEqual(expected);
  });

  test.each([
    {name: 'некорректное имя'},
    {name: 'дедушка '},
    {name: 'Бабушка'},
    {name: ' '},
    {name: ''},
    {name: 123},
    {name: null},
  ])('kolobok(), некорректные данные, кейс "$name"', ({ name }) => {
      expect(() => kolobok(name)).toThrow();
  });

  /**
   * В src/homework4.js напишите функцию "Новый год" и тесты к ней здесь.
   * Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
   * Возвращает "Снегурочка! Снегурочка! Снегурочка!" или "Дед Мороз! Дед Мороз! Дед Мороз!
   * В функции используйте интерполяцию. https://learn.javascript.ru/es-string
   */

  test.each([
    {name: 'Снегурочка', expected: 'Снегурочка! Снегурочка! Снегурочка!'},
    {name: 'Дед Мороз', expected: 'Дед Мороз! Дед Мороз! Дед Мороз!'},
  ])('newYear(), корректные данные, кейс "$name"', ({ name, expected }) => {
      expect(newYear(name)).toEqual(expected);
  });

    test.each([
        {name: 'Дед Мороз '},
        {name: 'снегурочка'},
        {name: 'некорректное имя'},
        {name: ' '},
        {name: ''},
        {name: 123},
        {name: null},
    ])('newYear(), некорректные даные, кейс "$name"', ({ name }) => {
        expect(() => newYear(name)).toThrow();
    });
});
