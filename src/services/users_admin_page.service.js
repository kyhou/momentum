import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/usersAdminPage/';

class UsersAdminPageService {
    getUsersDetails() {
        return http.get(
            API_URL, 
            { headers: authHeader() });
    }

    getUser(userId) {
        return http.get(
            API_URL + userId,
            { headers: authHeader() });
    }
        
    updateUser(user) {
        return http.post(
            API_URL + 'updateUser',
            { user },
            { headers: authHeader() });
    }
    
   toggleUserActive(userId) {
        return http.post(
            API_URL + 'toggleUserActive',
            { userId },
            { headers: authHeader() });
   }
}

export default new UsersAdminPageService();
