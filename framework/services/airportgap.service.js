import supertest from 'supertest';
import urls from '../config/urls';

const Airports = {
    /**
     * @param params URLSearchParams
     * @return Object
     */
    getAirportsList: async (params = '') => {
        return await supertest(`${urls.airportgap}`).get(`api/airports?${params}`);
    },
    /**
     * @param id number
     * @return Object
     */
    getAirportById: async (id) => {
        return await supertest(`${urls.airportgap}`).get(`api/airports/${id}`);
    },
};

export default Airports;
