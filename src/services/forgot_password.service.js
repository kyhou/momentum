import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/forgot_password/';

class ForgotPasswordService {
    send(to) {
        return http.post(API_URL + 'send', { to }, { headers: authHeader() })
    }
}

export default new ForgotPasswordService();