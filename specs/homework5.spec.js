import api from '../framework/services';

describe('API тесты ДЗ 5', () => {
    test('GET /airports пагинация, существующая страница 1 содержит 30 аэропортов', async () => {
        const params = new URLSearchParams(
            {
                page: 1,
            },
        );
        const response = await api().Airports().getAirportsList(params);
        expect(response.status).toEqual(200);
        expect(response.body.data).toHaveLength(30);
    });
    test('GET /airports пагинация, страница 10000000000 где нет результатов', async () => {
        const params = new URLSearchParams(
            {
                page: 10000000000,
            },
        );
        const response = await api().Airports().getAirportsList(params);
        expect(response.status).toEqual(200);
        expect(response.body.data).toEqual([]);
    });
    test('GET /airports пагинация, неправильная страница = 0', async () => {
        const params = new URLSearchParams(
            {
                page: 0,
            },
        );
        const response = await api().Airports().getAirportsList(params);
        expect(response.status).toEqual(404);
    });
    test('GET /airports пагинация, ссылки', async () => {
        const params = new URLSearchParams(
            {
                page: 3,
            },
        );
        const response = await api().Airports().getAirportsList(params);
        expect(response.status).toEqual(200);
        expect(response.body.links).toBeDefined();
        expect(response.body.links.first).toEqual('https://airportgap.dev-tester.com/api/airports');
        expect(response.body.links.self).toEqual('https://airportgap.dev-tester.com/api/airports?page=3');
        expect(response.body.links.last).toEqual('https://airportgap.dev-tester.com/api/airports?page=203');
        expect(response.body.links.prev).toEqual('https://airportgap.dev-tester.com/api/airports?page=2');
        expect(response.body.links.next).toEqual('https://airportgap.dev-tester.com/api/airports?page=4');
    });
    test('GET /airports/id существующий аэропорт', async () => {
        const airportId = 'KIX';
        const response = await api().Airports().getAirportById(airportId);
        expect(response.status).toEqual(200);
        expect(response.body.data.id).toEqual(airportId);
    });
    test('GET /airports/id несуществующий аэропорт', async () => {
        const airportId = 'nasdasd22';
        const response = await api().Airports().getAirportById(airportId);
        expect(response.status).toEqual(404);
    });
});
