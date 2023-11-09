import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/aportesAdminPage/';

class AportesAdminPageService {
    getAportes() {
        return http.get(
            API_URL,
            { headers: authHeader() }
        );
    };

    updateAporte(aporte) {
        return http.post(
            API_URL + 'updateAporte',
            { aporte },
            { headers: authHeader() }
        );
    };

    newAporte(aporte) {
        return http.post(
            API_URL + 'newAporte',
            { aporte },
            { headers: authHeader() }
        );
    };

    generateContract(aporteId) {
        return http.post(
            API_URL + 'generateContract',
            { aporteId },
            { headers: authHeader() }
        );
    };
};

export default new AportesAdminPageService();
