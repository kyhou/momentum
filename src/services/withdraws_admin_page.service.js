import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/withdrawsAdminPage/';

class WithdrawsAdminPageService {
    getWithdraws() {
        return http.get(
            API_URL, 
            { headers: authHeader() }
        );
    }
    toggleTransactionExecuted(transactionId) {
        return http.post(
            API_URL + "toggleTransactionExecuted",
            { transactionId },
            { headers: authHeader() }
        );
    }
    toggleUserTransactionsExecuted(withdrawsIds) {
        return http.post(
            API_URL + "toggleUserTransactionsExecuted",
            { withdrawsIds },
            { headers: authHeader() }
        );
    }
}

export default new WithdrawsAdminPageService();