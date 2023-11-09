import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/user/statement/';

class UserStatementService {
    getTransactions(userId) {
        return http.get(API_URL + userId, { headers: authHeader() })
    }
    registerWithdrawal(transaction) {
        return http.post(API_URL + 'signup', {
            email: user.email,
            password: user.password,
            roles: user.roles
          }, {
            headers: authHeader()
          });
    }
}

export default new UserStatementService();