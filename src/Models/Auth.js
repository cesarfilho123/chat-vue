// import {apiUrl} from '../config'

import { apiUrl } from "../config";

export default{
    login: async (dados) => {
        try{
            return apiUrl.post('/auth/authenticate',dados);
        }catch(e){
            return e;
        }
    },
    createUser:  (dados) => {
        return  apiUrl.post('/auth/register',dados);
    },
    verifyAuthenticated:() => {
        let token = localStorage.getItem('token');
        if(token){
            return true
        }else{
            return false;
        }
    }
}