import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/usersDetails';

class UsersDetailsService {
    getUserDetails(userId) {
        return http.get(API_URL + `/id/${userId}`, { headers: authHeader() });
    }
    
    getUserName(userId) {
        return http.get(API_URL + `/name/${userId}`, { headers: authHeader() });
    }

    getAllUsersDetails() {
        return http.get(API_URL + '/all', { headers: authHeader() });
    }
}

export default new UsersDetailsService();
