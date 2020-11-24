// import {apiUrl} from '../config'

import { apiUrl } from "../config";

export default{
    login: async (dados) => {
        console.log(dados);
    },
    createUser:  (dados) => {
        return  apiUrl.post('/auth/register',dados);
    }
}