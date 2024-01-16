import http from "../common/http-common";
import authHeader from "./auth-header";

const API_URL = "/profits/";

class ProfitsService {
    getProfits() {
        return http.get(API_URL, { headers: authHeader() });
    }

    getUserProfits(userId) {
        return http.get(`${API_URL}${userId}`, {
            headers: authHeader(),
        });
    }

    getAporteProfits(aporteId) {
        return http.get(`${API_URL}getAporteProfits/${aporteId}`, {
            headers: authHeader(),
        });
    }
}

export default new ProfitsService();
