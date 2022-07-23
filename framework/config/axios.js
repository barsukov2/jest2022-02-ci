import axios from 'axios';

const axiosInstance = axios.create({
    validateStatus: function () {
        return true;
    },
});

export default axiosInstance;
