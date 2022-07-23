import api from '../framework/services';
import accessKey from "../framework/fixtures/constants/mailboxlayer";
import chai from 'chai';
import chaiHttp from "chai-http";

var expect = chai.expect;

describe('API тесты ДЗ 9', () => {
    const validEmail = 'test@mail.com';
    describe('Mailboxlayer API, GET /api/check', () => {
        describe('позитивные кейсы', () => {

            test('валидный email с авторизацией', async () => {
                let response = await api().Mailboxlayer().getEmail(accessKey, validEmail);
                expect(response.status).to.equal(200);
            });
        });

        describe('негативные кейсы', () => {
            describe('невалидные емейлы', () => {
                test.each([
                    {email: '123mail.com', testDescription: 'без собаки'},
                    {email: 'abc@mailru', testDescription: 'без точки в домене'},
                    {email: 'mail@', testDescription: 'без домена'},
                    {email: '@service.com', testDescription: 'без логина'},
                    {email: '@', testDescription: 'только собака'},
                ])('невалидный емейлы - $testDescription', async ({email}) => {
                    await api().Mailboxlayer().getEmail(accessKey, email);
                    expect(response.status).to.equal(400);
                });
            });

            describe('без авторизации', () => {
                test('валидный email без авторизации', async () => {
                    await api().Mailboxlayer().getEmail('', validEmail);
                    expect(response.status).to.equal(401);
                });
            });

        });
    })
});
