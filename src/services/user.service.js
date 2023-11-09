import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL_TEST = '/test/';
const API_URL = '/users/';

class UserService {
    getPublicContent() {
        return http.get(API_URL_TEST + 'all');
    }

    getUserContent() {
        return http.get(API_URL_TEST + 'user', { headers: authHeader() });
    }

    getColaboratorContent() {
        return http.get(API_URL_TEST + 'colab', { headers: authHeader() });
    }

    getAdminContent() {
        return http.get(API_URL_TEST + 'admin', { headers: authHeader() });
    }

    getAllUsers() {
        return http.get(API_URL + 'users', { headers: authHeader() });
    }

    getUsersPageData() {
        return http.get(API_URL + 'usersPageData', { headers: authHeader() });
    }

    getMessage(userId) {
        return http.get(
            API_URL + `getMessage/${userId}`,
            { headers: authHeader() });
    }

    clearUserMessage(userId) {
        return http.put(
            API_URL + `clearMessage/${userId}`,
            { headers: authHeader() });
    }
}

export default new UserService();