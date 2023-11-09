import http from "../common/http-common";

class UsersDataService {
    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/users/${id}`);
    }

    create(data) {
        return http.post("/users/", data);
    }

    update(id, data) {
        return http.put(`/users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }

    findByName(data) {
        return http.get(`/users?firstName=${data.name}&lastName=${data.lastName}`);
    }
}

export default new UsersDataService();