import http from "../common/http-common";
import authHeader from './auth-header';

const API_URL = '/user/';

class UserDashboadService {
    getUserAportes(userId) {
        return http.get(API_URL + `${userId}`, { headers: authHeader() })
    }
    
    getAutoReinvest(userId) {
        return http.get(API_URL + `getAutoReinvest/${userId}`, { headers: authHeader() })
    }
    
    getBalanceOfType(userId, aporteType) {
        return http.get(API_URL + `getBalanceOfType/${userId}/${aporteType}`, { headers: authHeader() })
    }
    
    updateAutoReinvest(userId, autoReinvest) {
        return http.put(API_URL + `updateAutoReinvest/${userId}`, {autoReinvest}, { headers: authHeader() })
    }
    
    newTransaction(userId, value) {
        return http.post(API_URL + `newTransaction/${userId}`, {value}, { headers: authHeader() })
    }
        
    getUserProfits(userId) {
        return http.get(API_URL + `getUserProfits/${userId}`, { headers: authHeader() })
    }
        
    getAportesInitialSum(userId) {
        return http.get(API_URL + `getAportesInitialSum/${userId}`, { headers: authHeader() })
    }
}

export default new UserDashboadService();