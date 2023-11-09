import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/new_passwords/';

class NewPasswordsService {
    findOne(key) {
        return http.get(
            API_URL + `findOne/${key}`, 
            { headers: authHeader() }
        );
    }
}

export default new NewPasswordsService();
