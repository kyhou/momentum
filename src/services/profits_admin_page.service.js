import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/profitsAdminPage/';

class ProfitsAdminPageService {
    getProfits() {
        return http.get(
            API_URL, 
            { headers: authHeader() }
        );
    }

    getProfit(id) {
        return http.get(
            API_URL + id,
            { headers: authHeader() });
    }

    updateProfit(profit) {
        return http.post(
            API_URL + 'updateProfit',
            { profit },
            { headers: authHeader() }
        );
    }

    newProfit(profit) {
        return http.post(
            API_URL + 'newProfit',
            { profit },
            { headers: authHeader() }
        );
    }

    getUserAportes(userId) {
        return http.get(
            API_URL + `getUserAportes/${userId}`,
            { headers: authHeader() }
        );
    };
}

export default new ProfitsAdminPageService();
