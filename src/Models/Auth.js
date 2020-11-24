// import {apiUrl} from '../config'

import { apiUrl } from "../config";

export default{
    login: async (dados) => {
        return apiUrl.post('/auth/authenticate',dados);
    },
    createUser:  (dados) => {
        return  apiUrl.post('/auth/register',dados);
    }
}