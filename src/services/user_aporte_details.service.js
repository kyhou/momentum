import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/user/aporteDetails/';

class UserStatementService {
    getTransactions(aporteId) {
        return http.get(API_URL + aporteId, { headers: authHeader() })
    }
}

export default new UserStatementService();