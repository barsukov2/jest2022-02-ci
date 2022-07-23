import { axiosInstance } from "../config/index";
import urls from '../config/urls';

const Account = {
    deleteUser: async (uuid) => {
        const response = await axiosInstance.delete(`${urls.bookstore}/Account/v1/User${uuid}`);
        return response;
    },

    postAuthorized: async (object) => {
        const response = await axiosInstance.post(`${urls.bookstore}/Account/v1/Authorized`, object);
        return response;
    },

    postGenerateToken: async (object) => {
        const response = await axiosInstance.post(`${urls.bookstore}/Account/v1/GenerateToken`, object);
        return response;
    },

    getUser: async (uuid) => {
        const response = await axiosInstance.get(`${urls.bookstore}/Account/v1/User${uuid}`);
        return response;
    },

    postUser: async (object) => {
        const response = await axiosInstance.post(`${urls.bookstore}/Account/v1/User`, object);
        return response;
    },
};

export default Account;
