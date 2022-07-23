import supertest from 'supertest';
import urls from '../config/urls';
import accessKey from "../fixtures/constants/mailboxlayer";
import chai from 'chai';
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const MailboxlayerService = {
    getEmail: async (apiKey, email) => {
        const r = await chai.request(`${urls.mailboxlayer}`)
            .get(`/email_verification/${email}`)
            .set('Accept', 'application/json')
            .set('apikey', apiKey)
            .send();
        return r;
    },
};

export default MailboxlayerService;
