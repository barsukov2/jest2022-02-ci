import api from '../framework/services';
import faker from "@faker-js/faker";

describe('API тесты ДЗ 7', () => {
    describe('BookStore API, POST /Account/v1/User', () => {
        describe('позитивные кейсы', () => {
            let userId;
            afterAll(() => {
                api().Account().deleteUser(userId);
            });

            test('корректный логин и пароль',async () => {
                const requestBody = {
                    userName: faker.name.findName(),
                    password: 'Aa!123456',
                };
                const response = await  api().Account().postUser(requestBody);
                expect(response.status).toEqual(201);
            });
        });
        describe('негативные кейсы', () => {
            test.each([
                { requestBody: { userName: faker.name.findName(),password: 'Aa1123456',}, expectedStatus: 400, testDescription: 'без спец символа' },
                { requestBody: { userName: faker.name.findName(), password: 'za!123456', }, expectedStatus: 400, testDescription: 'без заглавного символа' },
                { requestBody: { userName: faker.name.findName(), password: 'AA!123456', }, expectedStatus: 400, testDescription: 'без символов в нижнем регистре' },
                { requestBody: { userName: faker.name.findName(), password: 'AA!PPPPPJ',}, expectedStatus: 400, testDescription: 'без чисел' },
            ])('некорректный пароль - $testDescription', async ({ requestBody, expectedStatus }) => {
                const response = await  api().Account().postUser(requestBody);
                expect(response.status).toEqual(expectedStatus);
            });
        });
    });

    describe('BookStore API, POST /Account/v1/Authorized', () => {
        describe('негативные кейсы', () => {
            test.each([
                { requestBody: { userName: faker.name.findName(), password: faker.internet.password(), }, expectedStatus: 404, testDescription: 'неизвестный юзер' },
                { requestBody: { userName: 123, password: 456, }, expectedStatus: 404, testDescription: 'некорретный реквест боди, тип данных number' },
                { requestBody: { userName: null, password: null, }, expectedStatus: 400, testDescription: 'некорретный реквест боди, тип данных null' },
                { requestBody: { userName: '', password: '', }, expectedStatus: 400, testDescription: 'некорретный реквест боди, пустая строка' },
                { requestBody: {}, expectedStatus: 400, testDescription: 'некорретный реквест боди, пустое боди' },
            ])('$testDescription', async ({ requestBody, expectedStatus }) => {
                const response = await api().Account().postAuthorized(requestBody);
                expect(response.status).toEqual(expectedStatus);
            });
        });

        describe('позитивные кейсы', () => {
            let userId;
            const requestBody = {
                userName: faker.name.findName(),
                password: 'Aa!123456',
            };
            beforeAll(async () => {
                const r = await  api().Account().postUser(requestBody);
                userId = r.data.userID;
            });
            afterAll(() => {
                api().Account().deleteUser(userId);
            });

            test('известный юзер', async () => {
                const response = await api().Account().postAuthorized(requestBody);
                expect(response.status).toEqual(200);
            });
        });
    });
});
