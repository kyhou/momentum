import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/transactionsAdminPage/';

class TransactionsAdminPageService {
    getTransactions() {
        return http.get(
            API_URL, 
            { headers: authHeader() }
        );
    }

    getTransaction(transactionId) {
        return http.get(
            API_URL + transactionId,
            { headers: authHeader() });
    }

    updateTransaction(transaction) {
        return http.post(
            API_URL + 'updateTransaction',
            { transaction },
            { headers: authHeader() }
        );
    }

    newTransaction(transaction) {
        return http.post(
            API_URL + 'newTransaction',
            { transaction },
            { headers: authHeader() }
        );
    }

   toggleTransactionActive(transactionId) {
        return http.post(
            API_URL + 'toggleTransactionActive',
            { transactionId },
           { headers: authHeader() });
    }

    getUserAportes(userId) {
        return http.get(
            API_URL + `getUserAportes/${userId}`,
            { headers: authHeader() }
        );
    };
}

export default new TransactionsAdminPageService();
